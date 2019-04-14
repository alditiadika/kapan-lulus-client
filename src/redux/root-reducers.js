import { combineReducers } from "redux";

import authReducer from "./auth/reducers";
import biodataReducer from "./biodata/reducers";

export default combineReducers({
  auth: authReducer,
  biodataReducer: biodataReducer
});
