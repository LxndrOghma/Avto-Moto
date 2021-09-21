import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RatingInputList from '../rating-input-list/rating-input-list';

import './review-form.scss';
import { defaultFormData } from '../../../const';

function ReviewForm ({isDisabled, onIsDisabledChange, onModalShown, reviews, onReviewAdd}) {
  const [formData, setFormData] = useState(defaultFormData);

  const [isFormValid, setIsFormValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);

  const onExitClick = (evt) => {
    evt.preventDefault();
    onIsDisabledChange(true);
    onModalShown(false);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    !formData.name.length ? setIsNameValid(false) : setIsNameValid(true);
    !formData.comment.length ? setIsCommentValid(false) : setIsNameValid(true);

    if (!formData.name.length || !formData.comment.length) {
      setIsFormValid(false);
      evt.preventDefault();
      return;
    }

    onReviewAdd(
      [...reviews,
        {
          ...formData,
          id: Math.round(Math.random()*1000),
        },
      ],
    );

    onIsDisabledChange(true);

    Object.entries(formData).forEach((data) => {
      localStorage.setItem(data[0], data[1]);
    });

    onModalShown(false);
    setFormData(defaultFormData);
  };

  const onClickOutsideForm = (evt) => {
    if (evt.target === evt.currentTarget) {
      onIsDisabledChange(true);
      onModalShown(false);
    }
  };

  return (
    <div tabIndex={-1} className={`reviews__form ${isDisabled ? 'visually-hidden' : ''}`} onClick={onClickOutsideForm} >
      <form method='POST' action='https://echo.htmlacademy.ru/' className='review-form' onSubmit={onSubmit} >
        <h2 className='review-form__header'>Оставить отзыв</h2>
        <div className='review-form__inputs inputs-block'>
          <label className='inputs-block__label visually-hidden' htmlFor='name'>Имя</label>
          <input
            className={`inputs-block__input ${!isNameValid ? 'inputs-block__input--invalid' : ''}`}
            id='name'
            name='name'
            type='text'
            placeholder='Имя'
            value={formData.name}
            onChange={(evt) => setFormData({...formData, name: evt.target.value})}
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
              className={`inputs-block__comment ${!isCommentValid ? 'inputs-block__comment--invalid' : ''}`}
              id='comment'
              name='comment'
              placeholder='Комментарий'
              value={formData.comment}
              onChange={(evt) => setFormData({...formData, comment: evt.target.value})}
            >
            </textarea>
          </div>
        </div>
        <button className='review-form__exit-button' onClick={onExitClick} />
        <button className='review-form__button' type='submit'>Оставить отзыв</button>
        <span className={`review-form__error ${!isFormValid ? 'review-form__error--active' : ''}`}>Пожалуйста, заполните поле</span>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onIsDisabledChange: PropTypes.func.isRequired,
  onModalShown: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    advise: PropTypes.bool.isRequired,
  })),
  onReviewAdd: PropTypes.func.isRequired,
};

export default ReviewForm;
