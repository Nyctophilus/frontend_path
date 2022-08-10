import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };
// -HL Redux/Toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      // -HL redux/toolkit, internally clone the state so we're allowed to muted the state like this
      state.counter--;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const { increment, decrement, toggle } =
  counterSlice.actions;

export default counterSlice.reducer;
