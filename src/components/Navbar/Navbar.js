import React from 'react';

import ToggleButton from '../Sidebar/ToggleButton';

import './Navbar.css';

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
        <div>
            <ToggleButton click={props.hamburgerHandler} />
        </div>
        <div className="navbar__logo"><a href="/">MEV GALLARY</a></div>
        <div className="empty-space"></div>
        <div className="navbar_navigation-items">
            <ul>
                <li><a href="/">Upload Image</a></li>
                <li><a href="/">Categories</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Navbar;
