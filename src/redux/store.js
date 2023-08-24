import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
