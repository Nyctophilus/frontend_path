import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartReducers,
    ui: uiReducer,
  },
});

export default store;
