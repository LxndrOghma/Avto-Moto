import React from 'react';

import { productInfoCharacteristics } from '../../const';
import ProductInfoCharacteristicsItem from '../product-info-characteristics-item/product-info-characteristics-item';

import './product-info-characteristics.scss';

function ProductInfoCharacteristics() {
  return (
    <ul className='product-info__characteristics-list characteristics-list'>
      {productInfoCharacteristics.map((char) => <ProductInfoCharacteristicsItem key={char.modification} characteristic={char} />)}
    </ul>
  );
}

export default ProductInfoCharacteristics;
