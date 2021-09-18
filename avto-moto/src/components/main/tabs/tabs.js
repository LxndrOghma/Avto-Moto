import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import TabsControls from '../tabs-controls/tabs-controls';

import './tabs.scss';

function Tabs({onModalShown}) {
  const [activeTab, setActiveTab] = useState('characteristics');

  const renderActiveTab = (tab) => {
    switch (tab) {
      case 'characteristics':
      { return <Characteristics />; }
      case 'contacts':
      { return <Contacts />; }
      case 'reviews':
      { return <Reviews onModalShown={onModalShown} />; }
      default:
      { return <Characteristics />; }
    }
  };

  return (
    <section className='page-main__tabs tabs'>
      <h2 className='visually-hidden'>Характеристики, отзывы, контакты</h2>
      <TabsControls activeTab={activeTab} onActiveTabChange={setActiveTab}/>
      {renderActiveTab(activeTab)}
    </section>
  );
}

Tabs.propTypes ={
  onModalShown: PropTypes.func.isRequired,
};

export default Tabs;
