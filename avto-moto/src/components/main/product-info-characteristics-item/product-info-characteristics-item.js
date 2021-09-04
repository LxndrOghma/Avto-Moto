import React from 'react';
import PropTypes from 'prop-types';

import './product-info-characteristics-item.scss';

function ProductInfoCharacteristicsItem({characteristic}) {
  const {modification, name} = characteristic;

  return (
    <li className='characteristics-list__item'>
      <p className={`characteristics-list__name characteristics-list__name--${modification}`}>{name}</p>
    </li>
  );
}

ProductInfoCharacteristicsItem.propTypes = {
  characteristic: PropTypes.shape({
    modification: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default ProductInfoCharacteristicsItem;
