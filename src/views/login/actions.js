import { type } from "../../redux/auth/types";
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
          type: type.login,
          payload: res.data
        });
      } else {
        localStorage.setItem("wrong", true);
        callback();
        dispatch({
          type: type.error,
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
        type: type.error,
        payload: err
      });
      window.location.href = "/wrong";
    });
};

export const mapDispatchToProps = dispatch => ({
  login: (payload, refreshSetter, callback) =>
    login(dispatch, payload, refreshSetter, callback)
});
export const mapStateToProps = state => ({
  auth: state.auth
});
