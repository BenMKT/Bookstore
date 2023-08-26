import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BookList = () => {
  const books = useSelector((store) => store.Book.books);
  return (
    <div className="book-container">
      <BookCard key={books.item_id} books={books} />
    </div>
  );
};

export default BookList;
