import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Slices/ProductSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
