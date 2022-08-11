import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const UIslice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const { toggle } = UIslice.actions;

export default UIslice.reducer;
