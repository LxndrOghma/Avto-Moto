import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reviewsMocks } from '../../../mocks/reviews-mocks';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';

import './reviews.scss';
import { escButtonCode } from '../../../const';

function Reviews({onModalShown}) {
  const [reviews, setReviews] = useState(reviewsMocks);
  const [isDisabled, setIsDisabled] = useState(true);

  const onLeaveFeedbackClick = (evt) => {
    evt.preventDefault();
    setIsDisabled(false);
    onModalShown(true);
  };

  const onEscKeydown = (evt) => {
    (evt.keyCode === escButtonCode) && setIsDisabled(true);
    onModalShown(false);
  };

  return (
    <div className='tabs__reviews reviews' onKeyDown={onEscKeydown}>
      <ul className='reviews__list'>
        {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
      </ul>
      <a href='/' className='reviews__link' onClick={onLeaveFeedbackClick}>Оставить отзыв</a>
      <ReviewForm
        isDisabled={isDisabled}
        onIsDisabledChange={setIsDisabled}
        onModalShown={onModalShown}
        reviews={reviews}
        onReviewAdd={setReviews}
      />
    </div>
  );
}

Reviews.propTypes ={
  onModalShown: PropTypes.func.isRequired,
};

export default Reviews;
