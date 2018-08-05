import React from 'react';

import './Navbar.css';
import logo from './logo.png'

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
        <div className="navbar__logo"><a href="/"><img src={logo} /></a></div>
        <div className="empty-space"></div>
        <div className="navbar_navigation-items">
            <ul>
                <li><button onClick={props.hamburgerHandler}>Upload Image</button></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Navbar;
