import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';
// import '../styles/Navbar.css';

const Navbar = () => (
  <div className="nav">
    <span className="cms">Bookstore CMS</span>
    <nav>
      <Link className="nav-book" to="/">
        Book
      </Link>
      <Link className="nav-category" to="/categories">
        Categories
      </Link>
    </nav>
    <div className="icon">
      <UserIcon />
    </div>
  </div>
  // <nav className="NavBarContainer">
  //   <h1>Bookstore CMS</h1>
  //   <ul className="Navbar">
  //     <li>
  //       <NavLink to="/">Books</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/Categories">Categories</NavLink>
  //     </li>
  //   </ul>
  // </nav>
);

export default Navbar;
