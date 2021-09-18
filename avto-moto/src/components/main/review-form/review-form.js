import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RatingInputList from '../rating-input-list/rating-input-list';

import './review-form.scss';

function ReviewForm ({isDisabled, onIsDisabledChange, onModalShown}) {
  const [formData, setFormData] = useState({
    name: '',
    advantages: '',
    disadvantages: '',
    rating: 0,
    comment: '',
  });

  const onExitClick = (evt) => {
    evt.preventDefault();
    onIsDisabledChange(true);
    onModalShown(false);
  };

  const onSubmit = () => {
    onIsDisabledChange(true);

    Object.entries(formData).forEach((data) => {
      localStorage.setItem(data[0], data[1]);
    });

    onModalShown(false);
  };

  const onClickOutsideForm = (evt) => {
    (evt.target === evt.currentTarget) && onIsDisabledChange(true);
    onModalShown(false);
  };

  return (
    <div tabIndex={-1} className={`reviews__form ${isDisabled ? 'visually-hidden' : ''}`} onClick={onClickOutsideForm} >
      <form method='POST' action='https://echo.htmlacademy.ru/' className='review-form' onSubmit={onSubmit} >
        <h2 className='review-form__header'>Оставить отзыв</h2>
        <div className='review-form__inputs inputs-block'>
          <label className='inputs-block__label visually-hidden' htmlFor='name'>Имя</label>
          <input
            className='inputs-block__input'
            id='name'
            name='name'
            type='text'
            placeholder='Имя'
            value={formData.name}
            onChange={(evt) => setFormData({...formData, name: evt.target.value})}
            required
          >
          </input>
          <label className='inputs-block__label visually-hidden' htmlFor='advantages'>Достоинства</label>
          <input
            className='inputs-block__input'
            id='advantages'
            name='advantages'
            type='text'
            placeholder='Достоинства'
            value={formData.advantages}
            onChange={(evt) => setFormData({...formData, advantages: evt.target.value})}
          >
          </input>
          <label className='inputs-block__label visually-hidden' htmlFor='disadvantages'>Недостатки</label>
          <input
            className='inputs-block__input'
            id='disadvantages'
            name='disadvantages'
            type='text'
            placeholder='Недостатки'
            value={formData.disadvantages}
            onChange={(evt) => setFormData({...formData, disadvantages: evt.target.value})}
          >
          </input>
          <div className='inputs-block__rating rating'>
            <label className='inputs-block__label'>Оцените товар:</label>
            <RatingInputList onRatingChange={setFormData} formData={formData}/>
          </div>
          <div className='inputs-block__comment-block'>
            <label className=' visually-hidden' htmlFor='comment'>Комментарий</label>
            <textarea
              className='inputs-block__comment'
              id='comment'
              name='comment'
              placeholder='Комментарий'
              value={formData.comment}
              onChange={(evt) => setFormData({...formData, comment: evt.target.value})}
              required
            >
            </textarea>
          </div>
        </div>
        <button className='review-form__exit-button' onClick={onExitClick} />
        <button className='review-form__button' type='submit'>Оставить отзыв</button>
        <span className='review-form__error'>Пожалуйста, заполните поле</span>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onIsDisabledChange: PropTypes.func.isRequired,
  onModalShown: PropTypes.func.isRequired,
};

export default ReviewForm;
