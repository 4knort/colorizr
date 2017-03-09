import React from 'react';
import { Link, IndexLink  } from 'react-router';

import './header.scss';
 
const Header = () => (
  <header className="header clearfix">
    <a href="" className="logo">
      <img src="" alt="" />
    </a>
    <nav className="header__nav">
      <li className="header__nav-item">
        <IndexLink to={'/'} activeClassName="header__nav-link--active" className="header__nav-link">Create</IndexLink>
      </li>
    </nav>
  </header>
);

export default Header;
