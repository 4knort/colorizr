import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Image } from 'components';

import './header.scss';

const Header = () => (
  <header className="header clearfix">
    <div className="container clearfix">
      <a href="" className="header__logo">
        <Image image="logoDark" />
      </a>
      <ul className="header__nav">
        <li className="header__nav-item">
          <IndexLink to={'/'} activeClassName="header__nav-link--active" className="header__nav-link">Create</IndexLink>
        </li>
        <li className="header__nav-item">
          <Link to={'/explore'} activeClassName="header__nav-link--active" className="header__nav-link">Explore</Link>
        </li>
        <li className="header__nav-item">
          <Link to={'/modify'} activeClassName="header__nav-link--active" className="header__nav-link">Modify</Link>
        </li>
        <li className="header__nav-item">
          <Link to={'/export'} activeClassName="header__nav-link--active" className="header__nav-link">Export</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
