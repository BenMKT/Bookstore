import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBook = createAsyncThunk('book/getBook', async () => {
  const res = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IRdXHWCzSp8I7apALfGg/books',
  );
  const books = Object.entries(res.data).map((item) => ({
    ...item[1][0],
    item_id: item[0],
  }));
  return books;
});

export const createBook = createAsyncThunk(
  'book/createBook',
  async (newBook) => {
    await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IRdXHWCzSp8I7apALfGg/books',
      newBook,
    );
    return newBook;
  },
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (itemId) => {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IRdXHWCzSp8I7apALfGg/books/${itemId}`,
    );
    return itemId;
  },
);

const initialState = {
  books: [],
  isLoading: false,
  isError: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    });

    builder.addCase(getBook.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });

    builder.addCase(getBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default bookSlice.reducer;
