import React from 'react';
import { ratings } from '../../../const';
import RatingInput from '../rating-input/rating-input';

import './rating-input-list.scss';

function RatingInputList() {
  return (
    <div className='rating__input-list'>
      {ratings.map((rating) => <RatingInput key={rating} starsCount={rating} />)}
    </div>
  );
}

export default RatingInputList;
