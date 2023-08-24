import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div>
    {books.map((book) => (
      <Book key={book.id} id={book.id} title={book.title} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default BookList;
