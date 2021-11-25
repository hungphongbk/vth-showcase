import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";

export default combineReducers({ cart: cartReducer });
