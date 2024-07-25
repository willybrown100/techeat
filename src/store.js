import { configureStore } from "@reduxjs/toolkit";
import sideReducer from "../src/utils/sideBarSlice"
import userReducer from "../src/utils/userSlice"
export const store = configureStore({
  reducer: {
    sideBar: sideReducer,
    user: userReducer,
  },
});