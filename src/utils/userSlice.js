import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { getUserId } = userSlice.actions;
export default userSlice.reducer;
