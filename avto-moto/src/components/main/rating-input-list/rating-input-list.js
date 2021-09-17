import React from 'react';
import PropTypes from 'prop-types';
import { ratings } from '../../../const';
import RatingInput from '../rating-input/rating-input';

import './rating-input-list.scss';

function RatingInputList({onRatingChange, formData}) {
  return (
    <div className='rating__input-list'>
      {ratings.map((rating) => <RatingInput key={rating} starsCount={rating} onRatingChange={onRatingChange} formData={formData} />)}
    </div>
  );
}

RatingInputList.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }),
};

export default RatingInputList;
