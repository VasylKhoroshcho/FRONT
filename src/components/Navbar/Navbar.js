import React from 'react';

import ToggleButton from '../Sidebar/ToggleButton';

import './Navbar.css';
import logo from './logo.png'

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
        <div className="navbar__logo"><a href="/"><img src={logo} /></a></div>
        <div className="empty-space"></div>
        <div className="navbar_navigation-items">
            <ul>
                <li><a href="/">Upload Image</a></li>
                <li><a href="/">Categories</a></li>
            </ul>
        </div>
        <div>
            <ToggleButton click={props.hamburgerHandler} />
        </div>
    </nav>
  </header>
);

export default Navbar;
