import { configureStore } from "@reduxjs/toolkit";
import { productsAdapter, productsApi } from "../api/api";
import cartReducer from "../components/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
