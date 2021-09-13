import React from 'react';
import RatingInputList from '../rating-input-list/rating-input-list';

import './review-form.scss';

function ReviewForm () {
  return (
    <div className='reviews__form'>
      <form className='review-form'>
        <h2 className='review-form__header'>Оставить отзыв</h2>
        <div className='review-form__inputs inputs-block'>
          <label className='inputs-block__label visually-hidden' htmlFor='name'>Имя</label>
          <input className='inputs-block__input' id='name' name='name' type='text' placeholder='Имя'></input>
          <label className='inputs-block__label visually-hidden' htmlFor='advantages'>Достоинства</label>
          <input className='inputs-block__input' id='advantages' name='advantages' type='text' placeholder='Достоинства'></input>
          <label className='inputs-block__label visually-hidden' htmlFor='disadvantages'>Недостатки</label>
          <input className='inputs-block__input' id='disadvantages' name='disadvantages' type='text' placeholder='Недостатки'></input>
          <div className='inputs-block__rating rating'>
            <label className='inputs-block__label'>Оцените товар:</label>
            <RatingInputList />
          </div>
          <textarea className='inputs-block__comment' name='comment' placeholder='Комментарий'></textarea>
        </div>
        <button className='inputs-block__button' type='submit' >Оставить отзыв</button>
      </form>
    </div>
  );
}

export default ReviewForm;
