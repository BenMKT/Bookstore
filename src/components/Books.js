import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import BookForm from './BookForm';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Book />
      <BookForm />
    </div>
  );
}

export default HomePage;
