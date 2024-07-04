import { configureStore } from "@reduxjs/toolkit";
import sideReducer from "../src/utils/sideBarSlice"
export const store=configureStore({
 reducer:{
sideBar:sideReducer
 }
})