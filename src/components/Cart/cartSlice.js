import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectProductById } from "../../api/api";
import {
  getProductsFromLocalStorage,
  clearProductsFromLocalStorage,
  setProductsToLocalStorage,
} from "../../utilities/fakedb2";

const initialState = {
  cartItems: getProductsFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      setProductsToLocalStorage(action.payload);
    },

    clearCart: (state) => {
      state.cartItems.length = 0;
      clearProductsFromLocalStorage();
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

const selectProductItem = (state) => {
  return state;
};

export const selectCartInfo = createSelector(selectProductItem, (state) =>
  state.cart.cartItems.reduce(
    (acc, id) => {
      // totalSelectedItems
      acc.selectedItems += 1;

      //   get product by id
      const { price, shipping } = selectProductById(state, id);

      //   totalPrice
      acc.totalPrice += price;

      //   totalShippingCharge
      acc.totalShippingCharge += shipping;

      // totalTax
      const totalTax = +((price * 15) / 100).toFixed(2);
      acc.tax = +(acc.tax + totalTax).toFixed(2);

      // totalAmount
      const totalAmount = +(
        acc.totalPrice +
        acc.totalShippingCharge +
        acc.tax
      ).toFixed(2);
      acc.grandTotal = totalAmount;
      return acc;
    },
    {
      selectedItems: 0,
      totalPrice: 0,
      totalShippingCharge: 0,
      tax: 0,
      grandTotal: 0,
    }
  )
);
