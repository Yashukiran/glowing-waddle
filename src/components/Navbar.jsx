import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">All Notes</Link>
    <Link to="/add">Add Note</Link>
  </nav>
);

export default Navbar;
