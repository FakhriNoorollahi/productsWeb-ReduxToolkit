import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.carts.push({ ...action.payload, quantity: 1 });
    },
    incrementNumberCart: (state, action) => {
      const cart = state.carts.find((c) => +c.id === +action.payload.id);
      cart.quantity++;
    },
    decrementNumberCart: (state, action) => {
      const cart = state.carts.find((c) => +c.id === +action.payload.id);
      cart.quantity--;
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((c) => +c.id !== action.payload);
    },
  },
});

export const { addCart, decrementNumberCart, incrementNumberCart, removeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
