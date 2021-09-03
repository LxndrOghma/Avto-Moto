import React from 'react';
import Slider from '../slider/slider';

import './page-main.scss';

function PageMain() {
  return (
    <main className='page-main'>
      <div className='page-main__wrapper main-content'>
        <h1 className='visually-hidden'>Магазин &quot;Avto Moto&quot;</h1>
        <Slider />
      </div>
    </main>
  );
}

export default PageMain;