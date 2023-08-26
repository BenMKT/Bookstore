import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';

const BookCard = ({ books }) => {
  const dispatch = useDispatch();
  const removeBook = (itemId) => {
    dispatch(deleteBook(itemId));
  };
  return (
    <>
      {books.map((book) => (
        <div key={book.item_id} className="bookCard">
          <div className="book">
            <p className="bookCategory">{book.category}</p>
            <h1 className="bookTitle">{book.title}</h1>
            <p className="bookAuthor">{book.author}</p>
            <div className="Book-btns">
              <button className="comment" type="button">
                Comments
              </button>
              <div className="Line-2" />
              <button
                className="remove"
                onClick={() => {
                  removeBook(book.item_id);
                }}
                type="button"
              >
                Remove
              </button>
              <div className="Line-2" />
              <button className="edit" type="button">
                Edit
              </button>
            </div>
          </div>
          <div className="bookInfo">
            <div className="progress" />
            <div className="progressInfo">
              <p className="percentage">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="Line-3" />
            <div className="ChapterInfo">
              <p className="currentChapter">CURRENT CHAPTER</p>
              <p className="chapter">Chapter 17</p>
              <button className="update" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

BookCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookCard;
