import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/BookForm.css';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime().toString(),
      title,
    };
    onAdd(newBook);
    setTitle('');
  };

  return (
    <div onClickCapture="Formcontainer">
      <h6>Add New Book</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <select name="mySelect" id="mySelect">
          <option value="option1">Categories</option>
          <option value="option2">Categories1</option>
          <option value="option3">Categories1</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
