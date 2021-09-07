import React from 'react';
import Characteristics from '../characteristics/characteristics';
import TabsControls from '../tabs-controls/tabs-controls';

import './tabs.scss';

function Tabs() {
  return (
    <section className='page-main__tabs tabs'>
      <TabsControls />
      <Characteristics />
    </section>
  );
}

export default Tabs;
