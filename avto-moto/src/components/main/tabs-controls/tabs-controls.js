import React from 'react';
import PropTypes from 'prop-types';

import './tabs-controls.scss';

function TabsControls({activeTab, setActiveTab}) {

  return (
    <div className='tabs__controls controls'>
      <button className={`controls__button ${activeTab === 'characteristics' ? 'controls__button--active' : ''}`} onClick={() => setActiveTab('characteristics')}>Характеристики</button>
      <button className={`controls__button ${activeTab === 'reviews' ? 'controls__button--active' : ''}`} onClick={() => setActiveTab('reviews')}>Отзывы</button>
      <button className={`controls__button ${activeTab === 'contacts' ? 'controls__button--active' : ''}`} onClick={() => setActiveTab('contacts')}>Контакты</button>
    </div>
  );
}

TabsControls.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabsControls;
