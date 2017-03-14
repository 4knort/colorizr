import React from 'react';
import { Link, IndexLink } from 'react-router';

import './header.scss';

const Header = () => (
  <header className="header clearfix">
    <div className="container">
      <a href="" className="logo">
        <img src="" alt="" />
      </a>
      <nav className="header__nav">
        <li className="header__nav-item">
          <IndexLink to={'/'} activeClassName="header__nav-link--active" className="header__nav-link">Create</IndexLink>
        </li>
        <li className="header__nav-item">
          <Link to={'/explore'} activeClassName="header__nav-link--active" className="header__nav-link">Explore</Link>
        </li>
        <li className="header__nav-item">
          <Link to={'/modify'} activeClassName="header__nav-link--active" className="header__nav-link">Modify</Link>
        </li>
      </nav>
    </div>
  </header>
);

export default Header;
