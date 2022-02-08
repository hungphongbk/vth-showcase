import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth.reducer";

export default combineReducers({ auth: authReducer });
