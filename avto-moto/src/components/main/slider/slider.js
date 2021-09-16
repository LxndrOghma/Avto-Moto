import React, { useState } from 'react';
import { sliderImages } from '../../../const';

import SliderControls from '../slider-controls/slider-controls';

import './slider.scss';

function Slider() {
  const [activeSlideId, setActiveSlideId] = useState(1);

  const setActiveImage = (arr, activeImgId) => arr.slice().find((img) => img.id === activeImgId).src;

  const onNextClick = () => {
    const newId = activeSlideId + 1;
    setActiveSlideId(newId);
  };

  const onPrevClick = () => {
    const newId = activeSlideId - 1;
    setActiveSlideId(newId);
  };

  return (
    <section className='images'>
      <h2 className='visually-hidden'>Слайдер изображений</h2>
      <div className='images__wrapper slider'>
        <div className='slider__image-wrapper active-slide'>
          <img
            className='active-slide__image'
            alt='active'
            src={setActiveImage(sliderImages, activeSlideId)}
            width='600'
            height='375'
          />
        </div>
      </div>
      <SliderControls
        images={sliderImages}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        activeImgId={activeSlideId}
        thumbnailsCount={sliderImages.length}
      />
    </section>
  );
}

export default Slider;
