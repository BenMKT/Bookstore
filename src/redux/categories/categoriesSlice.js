import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => {
      const initialState = 'Under construction';
      return initialState;
    },
  },
});

export default categoriesSlice.reducer;
