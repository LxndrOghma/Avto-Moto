import React from 'react';
import { siteMenuLinks } from '../../const';
import SiteMenuItem from '../site-menu-item/site-menu-item';

import './main-nav.scss';

function MainNav() {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list site-menu'>
        {siteMenuLinks.map((link) => <SiteMenuItem key={link} siteMenuLink={link} />)}
      </ul>
    </nav>
  );
}

export default MainNav;
