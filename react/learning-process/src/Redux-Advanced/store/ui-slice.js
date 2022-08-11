import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, notification: null };

const UIslice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    showNotification(state, action) {
      state.notification = {
        ...action.payload,
      };
    },
  },
});

export const { toggle, showNotification } = UIslice.actions;

export default UIslice.reducer;
