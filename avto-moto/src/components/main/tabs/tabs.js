import React, { useState } from 'react';
import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import TabsControls from '../tabs-controls/tabs-controls';

import './tabs.scss';

function Tabs() {
  const [activeTab, setActiveTab] = useState('characteristics');

  const renderActiveTab = (tab) => {
    switch (tab) {
      case 'characteristics':
        return <Characteristics />;
      case 'contacts':
        return <Contacts />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Characteristics />;
    }
  };

  return (
    <section className='page-main__tabs tabs'>
      <h2 className='visually-hidden'>Характеристики, отзывы, контакты</h2>
      <TabsControls activeTab={activeTab} setActiveTab={setActiveTab}/>
      {renderActiveTab(activeTab)}
    </section>
  );
}

export default Tabs;
