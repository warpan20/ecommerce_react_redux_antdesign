import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Slices/ProductSlice';
import sortOrderReducer from '../Slices/SortOrderSlice';
import loadingReducer from '../Slices/LoadingSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    sortOrder: sortOrderReducer,
    loadingStatus: loadingReducer
  },
});

export default store;
