import React from 'react';
import { сharacteristicsValues } from '../../../const';
import CharacteristicsItem from '../characteristics-item/characteristics-item';

import './characteristics.scss';

function Characteristics() {
  return (
    <table className='tabs__table characteristics-table'>
      <tbody>
        {сharacteristicsValues.map((char) => <CharacteristicsItem key={char} characteristic={char} />)}
      </tbody>
    </table>
  );
}

export default Characteristics;
