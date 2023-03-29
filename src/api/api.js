import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAdapter = createEntityAdapter();
const initialProductsState = productsAdapter.getInitialState();

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      transformResponse: (response) => {
        return productsAdapter.setAll(initialProductsState, response);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

export const selectProductsResult = productsApi.endpoints.getProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => {
    return productsResult.data;
  }
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productsAdapter.getSelectors(
    (state) => selectProductsData(state) ?? initialProductsState
  );
