import React from 'react';
import Links from '../links/links';
import Price from '../price/price';
import ProductInfoCharacteristics from '../product-info-characteristics/product-info-characteristics';

import './product-info.scss';

function ProductInfo() {
  return (
    <section className='product-info'>
      <h2 className='product-info__header'>Марпех 11</h2>
      <ProductInfoCharacteristics />
      <Price />
      <Links />
    </section>
  );
}

export default ProductInfo;
