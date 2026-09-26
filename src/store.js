import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/user/userReducer";
import cartReducer from "../src/features/cart/cartReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
