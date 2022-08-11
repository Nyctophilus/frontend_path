import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (i) => i.id === newItem.id
      );

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;

        state.totalAmount += existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });

        state.totalAmount += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(
        (i) => i.id === id
      );

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (i) => i.id !== id
        );
      } else {
        existingItem.quantity--;
      }

      state.totalAmount -= existingItem.price;
      state.totalQuantity--;
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
