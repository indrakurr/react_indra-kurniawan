import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const fetchPutProductById = createAsyncThunk(
  "product/putProductById",
  async (data) => {
    try {
      const result = await APIProducts.updateProduct(data.id, data);
      return result;
    } catch (error) {
      throw error; 
    }
  }
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const updateProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPutProductById.pending, (state) => {
        state.status = "loading";
        state.message = "";
      })
      .addCase(fetchPutProductById.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchPutProductById.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message; 
      });
  },
});

export const selectProduct = (state) => state.product;
export default updateProductSlice.reducer;
