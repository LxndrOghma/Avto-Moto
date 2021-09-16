import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';

import marker from '../../../assets/img/location.svg';

import './contacts.scss';

function Contacts() {
  return(
    <div className='tabs__contacts contacts'>
      <div className='contacts__info'>
        <ul className='contacts-list'>
          <li>
            <p className='contacts-list__header contacts-list__header--adress'>Адрес</p>
            <p className='contacts-list__description'>Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки, дом 5</p>
          </li>
          <li>
            <p className='contacts-list__header'>Режим работы</p>
            <p className='contacts-list__description'>Ежедневно, с 10:00 до 21:00</p>
          </li>
          <li>
            <p className='contacts-list__header'>Телефон</p>
            <a href='tel:88003335599' className='contacts-list__description'>8 (800) 333-55-99</a>
          </li>
          <li>
            <p className='contacts-list__header'>E-mail</p>
            <a href='mailto:info@avto-moto.ru' className='contacts-list__description'>info@avto-moto.ru</a>
          </li>
        </ul>
      </div>
      <div className='contacts__map'>
        <YMaps>
          <Map
            width={'100%'}
            height={'100%'}
            defaultState={{ center: [59.96826398208184, 30.316416896706528], zoom: 15 }}
          >
            <Placemark geometry={[59.96826398208184, 30.316416896706528]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: marker,
                iconImageSize: [32, 40],
                iconImageOffset: [-16, -40],
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Contacts;
