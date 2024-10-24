import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../services/httpReq";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
  currentProduct: {},
  favoriteProducts: [],
};

export const getAsyncProductsData = createAsyncThunk(
  "product/getAsyncProductsData",
  async () => {
    const { data } = await fetchData("/products");
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addFavoriteProducts: (state, action) => {
      state.favoriteProducts.push(action.payload);
    },
    removeFavoriteProduct: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (product) => +product.id !== +action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncProductsData.pending, (state) => {
        state.isLoading = true;
        state.products = [];
        state.error = "";
      })
      .addCase(getAsyncProductsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(getAsyncProductsData.rejected, (state) => {
        state.isLoading = false;
        state.error = "An occured error";
        state.products = [];
      });
  },
});

export const { addFavoriteProducts, removeFavoriteProduct } =
  productSlice.actions;
export default productSlice.reducer;
