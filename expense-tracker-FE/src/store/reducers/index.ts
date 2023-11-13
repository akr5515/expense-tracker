import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./userReducers";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  user: userReducers,
  notification: notificationReducer,
});

export default rootReducer;
