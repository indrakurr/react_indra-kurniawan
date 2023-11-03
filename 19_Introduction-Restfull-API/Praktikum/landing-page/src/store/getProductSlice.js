import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const fetchGetProducts = createAsyncThunk(
  "products/fetchGetProducts",
  APIProducts.getProducts
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetProducts.pending, (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase(fetchGetProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchGetProducts.rejected, (state, action) => {
      state.status = "failed";
      state.message = "Error fetching products";
    });
  },
});

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
