import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingStatus: true,
};

const loadingSlice = createSlice({
  name: 'loadingStatus',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loadingStatus = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
