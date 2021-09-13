import React from 'react';
import { сharacteristicsValues } from '../../../const';
import CharacteristicsItem from '../characteristics-item/characteristics-item';

import './characteristics.scss';

function Characteristics() {
  return (
    <div className='characteristics'>
      <table className='characteristics-table'>
        <tbody>
          {сharacteristicsValues.map((char) => <CharacteristicsItem key={char.description} characteristic={char} />)}
        </tbody>
      </table>
    </div>

  );
}

export default Characteristics;
