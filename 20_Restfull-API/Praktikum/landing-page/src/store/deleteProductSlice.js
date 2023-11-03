import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const fetchDeleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await APIProducts.deleteProduct(productId);
    return productId; 
  }
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const deleteProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeleteProduct.pending, (state) => {
        state.status = "loading";
        state.message = "";
      })
      .addCase(fetchDeleteProduct.fulfilled, (state, { payload }) => {
        state.status = "success";
        // Jangan mengubah state.data di sini, karena ini adalah penghapusan data
      })
      .addCase(fetchDeleteProduct.rejected, (state, { error }) => {
        state.status = "failed";
        state.message = error.message;
      });
  },
});

export const selectProducts = (state) => state.products;

export default deleteProductSlice.reducer;
