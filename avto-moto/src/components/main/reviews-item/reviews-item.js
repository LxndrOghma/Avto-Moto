import React from 'react';
import PropTypes from 'prop-types';

import './reviews-item.scss';

function ReviewsItem({review}) {
  const {name, advantages, disadvantages, comment, rating, advise} = review;
  return (
    <li className='reviews__list-item review'>
      <p className='review__name'>
        {name}
      </p>
      <div className='review__advantages review__advantages--advantage'>
        <p className='review__header'>Достоинства</p>
        <p className='review__text'>{advantages}</p>
      </div>
      <div className='review__advantages review__advantages--disadvantage'>
        <p className='review__header'>Недостатки</p>
        <p className='review__text'>{disadvantages}</p>
      </div>
      <div className='review__comment'>
        <p className='review__header'>Комментарий</p>
        <p className='review__text review__text--comment'>{comment}</p>
      </div>
      <div className="review__rating rating">
        <div className="rating__stars">
          <span className='rating__active_stars' style={{ width: `${ rating * 20 }%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className={`rating__advises ${advise ? '' : 'visually-hidden'}`}>Советует</span>
      </div>
      <div className="review__answer">
        <span className='review__timer'>1 минуту назад</span>
        <a className='review__answer-link' href='/'>Ответить</a>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    advise: PropTypes.bool.isRequired,
  }),
};

export default ReviewsItem;
