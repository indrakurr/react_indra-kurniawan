import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const fetchPostProducts = createAsyncThunk(
  "fetch/postProduct",
  APIProducts.postProduct
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const createProductSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPostProducts.pending, (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase(fetchPostProducts.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase(fetchPostProducts.rejected, (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectProducts = (state) => state.products;

export default createProductSlice.reducer;
