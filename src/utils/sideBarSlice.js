import { createSlice } from "@reduxjs/toolkit"

const initialState ={
 open:false
}
const sideSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers:{
   toggleBar(state,action){
    state.open=action.payload
   }
  }
});

export const { toggleBar } = sideSlice.actions;
export default sideSlice.reducer;