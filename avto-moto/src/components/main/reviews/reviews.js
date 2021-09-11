import React from 'react';
import { reviewsMocks } from '../../../mocks/reviews-mocks';
import ReviewsItem from '../reviews-item/reviews-item';

import './reviews.scss';

function Reviews() {
  return (
    <div className='tabs__reviews reviews'>
      <ul className='reviews__list'>
        {reviewsMocks.map((review) => <ReviewsItem key={review.id} review={review} />)}
      </ul>
      <a href='/' className='reviews__link'>Оставить отзыв</a>
    </div>
  );
}

export default Reviews;
