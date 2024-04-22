import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Slices/ProductSlice';
import sortOrderReducer from '../Slices/SortOrderSlice';
import loadingReducer from '../Slices/LoadingSlice';
import cartItemsReducer from '../Slices/CartItemsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    sortOrder: sortOrderReducer,
    loadingStatus: loadingReducer,
    cartItems: cartItemsReducer
  },
});

export default store;
