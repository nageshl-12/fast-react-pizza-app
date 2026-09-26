import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
        return;
      }

      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearItem(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
  clearItem,
} = cartReducer.actions;

export const getCart = (state) => state.cart.cart;

export const getTotalCartValue = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getCurrentCartItem = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id);
export default cartReducer.reducer;
export const getCurrentCartItemQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id).quantity || 0;
