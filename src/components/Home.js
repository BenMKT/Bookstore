import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const newBook = { id: Date.now(), title };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <BookForm onCreate={handleCreateBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;
