import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import Navbar from './Navbar';

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
      <Navbar />
      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
}

export default Categories;
