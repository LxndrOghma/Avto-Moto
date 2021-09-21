import React from 'react';
import PropTypes from 'prop-types';

import './rating-input.scss';

function RatingInput({starsCount, onRatingChange, formData}) {
  return (
    <>
      <input
        className="rating__input visually-hidden"
        name="rating"
        value={starsCount}
        id={`${starsCount}-stars`}
        type="radio"
        checked = {starsCount === formData.rating}
        onChange={() => onRatingChange({...formData, rating: starsCount})}
      />
      <label htmlFor={`${starsCount}-stars`} className="rating__input-label" title={`${starsCount}-stars`}>
        <svg className='rating__input-svg' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0561 0L16.1024 9.52282H25.9607L17.9852 15.4082L21.0316 24.9311L13.0561 19.0456L5.08054 24.9311L8.12692 15.4082L0.151406 9.52282H10.0097L13.0561 0Z" />
        </svg>
      </label>
    </>
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
