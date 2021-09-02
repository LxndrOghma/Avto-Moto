import React from 'react';

import logo from '../../../assets/img/avto_moto_logo.svg';

import './logo.scss';

function Logo() {
  return (
    <a href='/' className='page-header__logo'>
      <img src={logo} className='page-header__logo-img' width='135' height='55' alt='Avto Moto'/>
    </a>
  );
}

export default Logo;
