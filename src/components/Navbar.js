import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>Dhirendra</Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/#topics" onClick={closeMenu}>Topics</Link>
        <Link to="/#about" onClick={closeMenu}>About</Link>
        <Link to="/#contact" onClick={closeMenu}>Contact</Link>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar; 