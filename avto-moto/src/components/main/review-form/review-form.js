import React from 'react';
import PropTypes from 'prop-types';

import RatingInputList from '../rating-input-list/rating-input-list';

import './review-form.scss';

function ReviewForm ({isDisabled, setIsDisabled}) {
  const onExitClick = (evt) => {
    evt.preventDefault();
    setIsDisabled(true);
    const body = document.querySelector('.page');
    body.classList.remove('page--modal-open');
  };

  const onSubmit = () => {
    setIsDisabled(true);
    const body = document.querySelector('.page');
    body.classList.remove('page--modal-open');
  };

  return (
    <div className={`reviews__form ${isDisabled ? 'visually-hidden' : ''}`}>
      <form className='review-form' onSubmit={onSubmit}>
        <h2 className='review-form__header'>Оставить отзыв</h2>
        <div className='review-form__inputs inputs-block'>
          <label className='inputs-block__label visually-hidden' htmlFor='name'>Имя</label>
          <input className='inputs-block__input' id='name' name='name' type='text' placeholder='Имя' required></input>
          <span className='inputs-block__error'>Пожалуйста, заполните поле</span>
          <label className='inputs-block__label visually-hidden' htmlFor='advantages'>Достоинства</label>
          <input className='inputs-block__input' id='advantages' name='advantages' type='text' placeholder='Достоинства'></input>
          <label className='inputs-block__label visually-hidden' htmlFor='disadvantages'>Недостатки</label>
          <input className='inputs-block__input' id='disadvantages' name='disadvantages' type='text' placeholder='Недостатки'></input>
          <div className='inputs-block__rating rating'>
            <label className='inputs-block__label'>Оцените товар:</label>
            <RatingInputList />
          </div>
          <div className='inputs-block__comment-block'>
            <label className=' visually-hidden' htmlFor='comment'>Комментарий</label>
            <textarea className='inputs-block__comment' id='comment' name='comment' placeholder='Комментарий' required></textarea>
          </div>
        </div>
        <button className='inputs-block__exit-button' onClick={onExitClick} />
        <button className='inputs-block__button' type='submit'>Оставить отзыв</button>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  setIsDisabled: PropTypes.func.isRequired,
};

export default ReviewForm;
