import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import { getBook } from './redux/books/booksSlice';

function App() {
  const { isLoading, isError } = useSelector((state) => state.Book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <h2 className="error">Could not Load Books!!</h2>;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
