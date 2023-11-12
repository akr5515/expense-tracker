import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  user: userReducers,
});

export default rootReducer;
