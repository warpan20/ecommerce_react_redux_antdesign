import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartItems } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
