import React from 'react';

import './Navbar.css';
import logo from './logo.png';

const Navbar = props => {
  const { hamburgerHandler } = props;

  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="navbar__logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="empty-space" />
        <div className="navbar_navigation-items">
          <ul>
            <li>
              <button type="button" onClick={hamburgerHandler}>
                Upload Image
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
