import React from 'react';
import PropTypes from 'prop-types';

import './site-menu-item.scss';

function SiteMenuItem({siteMenuLink}) {
  return (
    <li className='site-menu__item'>
      <a href='/'>
        {siteMenuLink}
      </a>
    </li>
  );
}

SiteMenuItem.propTypes = {
  siteMenuLink: PropTypes.string.isRequired,
};

export default SiteMenuItem;
