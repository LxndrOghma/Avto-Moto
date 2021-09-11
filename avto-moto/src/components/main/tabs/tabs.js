import React from 'react';
// import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
// import Contacts from '../contacts/contacts';
import TabsControls from '../tabs-controls/tabs-controls';

import './tabs.scss';

function Tabs() {
  return (
    <section className='page-main__tabs tabs'>
      <TabsControls />
      {/* <Characteristics /> */}
      {/* <Contacts /> */}
      <Reviews />
    </section>
  );
}

export default Tabs;
