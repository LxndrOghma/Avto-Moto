import React from 'react';

import './tabs-controls.scss';

function TabsControls() {
  return (
    <div className='tabs__controls controls'>
      <button className='controls__button controls__button--active'>Характеристики</button>
      <button className='controls__button'>Отзывы</button>
      <button className='controls__button'>Контакты</button>
    </div>
  );
}

export default TabsControls;
