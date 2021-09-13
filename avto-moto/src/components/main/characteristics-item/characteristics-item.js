import React from 'react';
import PropTypes from 'prop-types';

import './characteristics-item.scss';

function CharacteristicsItem({characteristic}) {
  return(
    <tr className='characteristics-table__row'>
      <td className='characteristics-table__description'>{characteristic.description}</td>
      <td className='characteristics-table__value'>{characteristic.value}</td>
    </tr>
  );
}

CharacteristicsItem.propTypes = {
  characteristic: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default CharacteristicsItem;
