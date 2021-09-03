import React from 'react';

import SliderControls from '../slider-controls/slider-controls';
import marpeh from '../../../assets/img/marpeh.jpg';

import './slider.scss';

function Slider() {
  return (
    <section className='images'>
      <div className='images__wrapper slider'>
        <div className='slider__image-wrapper active-slide'>
          <img className='active-slide__image' alt='active' src={marpeh} width='600' height='375'/>
        </div>
      </div>
      <SliderControls />
    </section>
  );
}

export default Slider;
