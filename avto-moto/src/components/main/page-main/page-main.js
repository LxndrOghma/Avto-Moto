import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../product-info/product-info';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

import './page-main.scss';

function PageMain({onModalShown}) {
  return (
    <main className='page-main'>
      <div className='page-main__wrapper main-content'>
        <h1 className='visually-hidden'>Магазин &quot;Avto Moto&quot;</h1>
        <Slider />
        <ProductInfo />
        <Tabs onModalShown={onModalShown} />
      </div>
    </main>
  );
}

PageMain.propTypes ={
  onModalShown: PropTypes.func.isRequired,
};

export default PageMain;
