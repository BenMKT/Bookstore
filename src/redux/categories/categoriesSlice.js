import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    reducers: {
      checkStatus: (state, action) => {
        state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories;
      },
    },
  },
});

export default categoriesSlice.reducer;
