import { type } from "../../../redux/auth/types";
import axios from "axios";
import configAPI from "../../../config/config-api";
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
        localStorage.setItem("token", JSON.stringify(res.data.message.token));
        window.location.href = "/dashboard";
        dispatch({
          type: type.login,
          payload: res.data
        });
      } else {
        callback();
        dispatch({
          type: type.error,
          payload: res.data
        });
      }
    })
    .catch(err => {
      callback();
      refreshSetter(false);
      dispatch({
        type: type.error,
        payload: err
      });
    });
};

export const mapDispatchToProps = dispatch => ({
  login: (payload, refreshSetter, callback) =>
    login(dispatch, payload, refreshSetter, callback)
});
export const mapStateToProps = state => ({
  auth: state.auth
});
