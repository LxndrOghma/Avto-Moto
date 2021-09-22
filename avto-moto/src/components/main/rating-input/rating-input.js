import React from 'react';
import PropTypes from 'prop-types';

import './rating-input.scss';
import { RatingDescription } from '../../../const';

function RatingInput({starsCount, onRatingChange, formData}) {
  return (
    <input
      className="rating__star"
      type="radio"
      name="rating"
      value={starsCount}
      id={`${starsCount}-stars`}
      aria-label={RatingDescription[starsCount]}
      checked = {starsCount === formData.rating}
      onChange={() => onRatingChange({...formData, rating: starsCount})}
    />
  );
}

RatingInput.propTypes = {
  starsCount: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }),
};

export default RatingInput;
