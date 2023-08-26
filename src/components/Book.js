import BookList from './BookList';
import AddBook from './AddBook';

const Book = () => (
  <div className="Books">
    <BookList />
    <div className="Line" />
    <AddBook />
  </div>
);

export default Book;
