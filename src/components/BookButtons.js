import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, deleteBook } from '../redux/books/booksSlice';

const BookButtons = () => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4',
      title: 'New Book',
      author: 'Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = () => {
    const bookIdToRemove = 'item1';
    dispatch(deleteBook(bookIdToRemove));
  };

  return (
    <div>
      <button type="button" onClick={handleAddBook}>
        Add Book
      </button>
      <button type="button" onClick={handleRemoveBook}>
        Remove Book
      </button>
    </div>
  );
};

export default BookButtons;
