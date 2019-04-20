import { type as authType } from "../../redux/auth/types";
import biodataType from "../../redux/biodata/types";
import axios from "axios";
import configAPI from "../../config/config-api";

export const login = (dispatch, userData, refreshSetter, callback) => {
  axios({
    url: `${configAPI.url}${configAPI.endpoint.login}`,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      username: userData.username,
      password: userData.password
    }
  })
    .then(res => {
      refreshSetter(false);
      if (res.data.status === 200) {
        localStorage.clear("wrong");
        localStorage.setItem("token", JSON.stringify(res.data.message.token));
        window.location.href = "/dashboard";
        dispatch({
          type: authType.login,
          payload: res.data
        });
      } else {
        localStorage.setItem("wrong", true);
        callback();
        dispatch({
          type: authType.error,
          payload: res.data
        });
        window.location.href = "/wrong";
      }
    })
    .catch(err => {
      localStorage.setItem("wrong", true);
      callback();
      refreshSetter(false);
      dispatch({
        type: authType.error,
        payload: err
      });
      window.location.href = "/wrong";
    });
};

export const onFirstRegister = (dispatch, userData, nextAction) => {
  if (userData.verificationCode === "") {
    axios({
      url: `${configAPI.url}${configAPI.endpoint.mailSender}`,
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        ...userData
      }
    })
      .then(res => {
        nextAction.spinnerOff();
        if (res.data.status === 200) {
          dispatch({
            type: biodataType.zero,
            payload: { ...res.data.message }
          });
          nextAction.modalOpen();
        } else {
          nextAction.warning(res.data.message);
        }
      })
      .catch(err => {
        nextAction.spinnerOff();
        dispatch({
          type: biodataType.zero,
          payload: err
        });
        nextAction.warning("Maaf terdapat error, harap ulangi");
      });
  } else {
    nextAction.spinnerOff();
    nextAction.modalOpen();
  }
};

const sendData = (dispatch, userData) => {
  console.log("send data to server");
  axios({
    url: `${configAPI.url}${configAPI.endpoint.register}`,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: userData
  })
    .then(res => {
      console.log("dispathing data");
      dispatch({
        type: biodataType.zero,
        payload: { name: "isLoading", value: false }
      });
      if (res.data.status === 200) {
        console.log("logged in");
        localStorage.clear("wrong");
        localStorage.setItem("token", JSON.stringify(res.data.message.token));
        window.location.href = "/dashboard";
        dispatch({
          type: authType.login,
          payload: res.data
        });
      } else {
        localStorage.setItem("wrong", true);
        dispatch({
          type: authType.error,
          payload: res.data
        });
        window.location.href = "/wrong";
      }
    })
    .catch(err => {
      localStorage.setItem("wrong", true);
      dispatch({
        type: biodataType.zero,
        payload: { name: "isLoading", value: false }
      });
      dispatch({
        type: authType.error,
        payload: err
      });
      window.location.href = "/wrong";
    });
};

export const mapDispatchToProps = dispatch => ({
  login: (payload, refreshSetter, callback) =>
    login(dispatch, payload, refreshSetter, callback),
  onChange: payload => dispatch({ type: biodataType.onChange, payload }),
  onFirstRegister: (payload, nextAction) =>
    onFirstRegister(dispatch, payload, nextAction),
  sendData: (payload, action) => sendData(dispatch, payload, action)
});
export const mapStateToProps = state => ({
  auth: state.auth,
  biodataReducer: state.biodataReducer
});
