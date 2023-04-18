import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/api";
import cartReducer from "../components/Cart/cartSlice";
// import authReducer from "../createSlices/authSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


// store.dispatch(checkAuthStatus())
