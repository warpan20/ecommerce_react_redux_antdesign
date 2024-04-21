import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Slices/ProductSlice';
import sortOrderReducer from '../Slices/SortOrderSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    sortOrder: sortOrderReducer
  },
});

export default store;
