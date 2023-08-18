import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ title, author, onDelete }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete();
  };

  if (isDeleted) {
    return null; // Render nothing if the book is deleted
  }

  return (
    <div className="Bookcontainer">
      <div className="book1">
        <h3>{title}</h3>
        Action
        <h4>
          {title}
          The Hunger Games
        </h4>
        <p>
          {'Karen Mbiro '}
          {author}
        </p>
        {'64% '}
        <button className="btn" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="book1">
        <h3>{title}</h3>
        Science fiction
        <h4>
          {title}
          Dune
        </h4>
        <p>
          {'Eddie Mozart '}
          {author}
        </p>
        {'8% '}
        <button className="btn" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="book1">
        <h3>{title}</h3>
        Action
        <h4>
          {title}
          Transformers:Rise of the Beasts
        </h4>
        <p>
          {'Benson Kiai '}
          {author}
        </p>
        {'100% '}
        <button className="btn" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
