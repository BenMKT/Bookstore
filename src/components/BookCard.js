import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

/* eslint-disable react/prop-types */
const BookCard = ({ books }) => {
  const dispatch = useDispatch();
  const deleteBook = (itemId) => {
    dispatch(removeBook(itemId));
  };
  return (
    <>
      {books.map((book) => (
        <div key={book.item_id} className="bookCard">
          <div className="book">
            <p>{book.category}</p>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <div className="Book-btns">
              <button type="button">Comments</button>
              <div className="divide" />
              <button
                onClick={() => {
                  deleteBook(book.item_id);
                }}
                type="button"
              >
                Remove
              </button>
              <div className="divide" />
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="bookInfo">
            <div className="progress" />
            <div className="progressInfo">
              <p>64%</p>
              <p>Completed</p>
            </div>
            <div className="ChapterInfo">
              <p>CURRENT CHAPTER</p>
              <p>17</p>
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
export default BookCard;
