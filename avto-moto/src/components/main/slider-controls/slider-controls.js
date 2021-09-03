import React from 'react';

import marpeh from '../../../assets/img/marpeh.jpg';
import marpehSalon from '../../../assets/img/marpeh_salon.jpg';
import marpehSpeedometr from '../../../assets/img/marpeh_speedometer.jpg';

import './slider-controls.scss';

function SliderControls() {
  return (
    <div className='slider__controls slider-controls'>
      <button className='slider-controls__button slider-controls__button--prev slider-controls__button--disabled'><span className='visually-hidden'>Предыдущее изображение</span></button>
      <div className='slider-controls__thumbnails thumbnails'>
        <img className='thumbnails__image' alt='thumb' src={marpeh} width='128' height='80'/>
        <img className='thumbnails__image' alt='thumb' src={marpehSalon} width='128' height='80'/>
        <img className='thumbnails__image' alt='thumb' src={marpehSpeedometr} width='128' height='80'/>
      </div>
      <button className='slider-controls__button slider-controls__button--next'><span className='visually-hidden'>Предыдущее изображение</span></button>
    </div>
  );
}

export default SliderControls;

