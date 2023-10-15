import { configureStore } from "@reduxjs/toolkit";
import products from "./product/ProductSlice";

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
