import React from 'react';

import map from '../../../assets/img/map.png';

import './contacts.scss';

function Contacts() {
  return(
    <div className='tabs__contacts contacts'>
      <div className='contacts__info'>
        <ul className='contacts-list'>
          <li className='contats-list__item'>
            <p className='contacts-list__header contacts-list__header--adress'>Адрес</p>
            <p className='contacts-list__description'>Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки, дом 5</p>
          </li>
          <li className='contats-list__item'>
            <p className='contacts-list__header'>Режим работы</p>
            <p className='contacts-list__description'>Ежедневно, с 10:00 до 21:00</p>
          </li>
          <li className='contats-list__item'>
            <p className='contacts-list__header'>Телефон</p>
            <a href='tel:88003335599' className='contacts-list__description'>8 (800) 333-55-99</a>
          </li>
          <li className='contats-list__item'>
            <p className='contacts-list__header'>E-mail</p>
            <a href='mailto:info@avto-moto.ru' className='contacts-list__description'>info@avto-moto.ru</a>
          </li>
        </ul>
      </div>
      <div className='contacts__map'>
        <img src={map} alt='Avto Moto Location' width='431' height='271' />
      </div>
    </div>
  );
}

export default Contacts;
