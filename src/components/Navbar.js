import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">My Learning Journey</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar; 