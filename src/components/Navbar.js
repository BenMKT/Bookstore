import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="NavBarContainer">
    <h1>Bookstore CMS</h1>
    <ul className="Navbar">
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="/Categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
