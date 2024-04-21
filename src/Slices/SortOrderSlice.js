import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortOrder: "az",
};

const sortOrderSlice = createSlice({
  name: 'sortOrder',
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSortOrder } = sortOrderSlice.actions;
export default sortOrderSlice.reducer;