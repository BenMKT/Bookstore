import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/Book.css';

const Book = ({ id, title, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <h3>{title}</h3>
      <button className="btn" type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default Book;
