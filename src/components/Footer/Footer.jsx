import React from 'react';
import { Image } from 'components';

import './footer.scss';

const Footer = () => (
  <footer className="footer clearfix">
    <div className="container clearfix">
        <Image image="logoLight" className={'footer__logo'} />
    </div>
  </footer>
);

export default Footer;
