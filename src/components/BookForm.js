import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import '../styles/BookForm.css';

const BookForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onCreate(title);
      setTitle('');
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
        <select name="mySelect" id="mySelect">
          <option value="Categories1">Categories1</option>
          <option value="Categories2">Categories2</option>
          <option value="Categories3">Categories3</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  onCreate: PropTypes.string.isRequired,
};

export default BookForm;
