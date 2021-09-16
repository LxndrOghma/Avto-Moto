import React, { useState } from 'react';
import { reviewsMocks } from '../../../mocks/reviews-mocks';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';

import './reviews.scss';

function Reviews() {
  const [isDisabled, setIsDisabled] = useState(true);
  const body = document.querySelector('.page');

  const onLeaveFeedbackClick = (evt) => {
    evt.preventDefault();
    setIsDisabled(false);
    body.classList.add('page--modal-open');
  };

  const onEscKeydown = (evt) => {
    (evt.keyCode === 27) && setIsDisabled(true);
    body.classList.remove('page--modal-open');
  };

  return (
    <div className='tabs__reviews reviews' onKeyDown={onEscKeydown}>
      <ul className='reviews__list'>
        {reviewsMocks.map((review) => <ReviewsItem key={review.id} review={review} />)}
      </ul>
      <a href='/' className='reviews__link' onClick={onLeaveFeedbackClick}>Оставить отзыв</a>
      <ReviewForm isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </div>
  );
}

export default Reviews;
