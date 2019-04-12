import { type } from "../../redux/auth/types";
import axios from "axios";
import configAPI from "../../config/config-api";
export const login = (dispatch, userData, refreshSetter) => {
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
        dispatch({
          type: type.login,
          payload: res.data
        });
      } else {
        dispatch({
          type: type.error,
          payload: res.data
        });
      }
    })
    .catch(err => {
      refreshSetter(false);
      dispatch({
        type: type.error,
        payload: err
      });
    });
};

export const mapDispatchToProps = dispatch => ({
  login: (payload, refreshSetter) => login(dispatch, payload, refreshSetter)
});
export const mapStateToProps = state => ({
  auth: state.auth
});
