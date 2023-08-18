import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

function Categories() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
}

export default Categories;
