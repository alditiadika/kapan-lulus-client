import { type } from "./types";

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: null,
  status: null,
  message: ""
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case type.login: {
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.message.token)
      );
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.message,
        status: action.payload.status,
        message: "Success Login"
      };
    }
    case type.error: {
      return {
        ...state,
        isAuthenticated: false,
        status: action.payload.status,
        message: action.payload.message
      };
    }
    default:
      return state;
  }
};
