import React from 'react';
import { footerNavLinks } from '../../const';
import FooterNavItem from '../footer-nav-item/footer-nav-item';

import './footer-nav.scss';

function FooterNav() {
  return (
    <ul className='page-footer__nav footer-nav'>
      {footerNavLinks.map((link) => <FooterNavItem key={`footer_${link}`} footerMenuLink={link} />)}
    </ul>
  );
}

export default FooterNav;
