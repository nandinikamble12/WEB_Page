import React, { useState } from 'react';
import './Navbar.css'; // Include CSS for styling

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Navbar = ({ selectedCategory, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-header">
        {/* Logo */}
        <div className="navbar-logo">
          <h1>Menu</h1>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => {
                onCategoryChange(category);
                setIsMenuOpen(false); // Close menu on selection
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
