import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductT } from './products.schema';
import productService from '../api/productService';

export type ProductsSliceState = {
  list: ProductT[];
  chosenProduct: null | ProductT;
};

const initialState: ProductsSliceState = {
  list: [],
  chosenProduct: null,
};

export const getProductsThunk = createAsyncThunk('products/getProducts', async () =>
  productService.getProducts(),
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setChosenProduct: (state, action: PayloadAction<ProductT | null>) => {
      state.chosenProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setChosenProduct } = productsSlice.actions;

export default productsSlice.reducer;
