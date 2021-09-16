import React from 'react';
import PropTypes from 'prop-types';

import './slider-controls.scss';

function SliderControls({images, onNextClick, onPrevClick, activeImgId, thumbnailsCount}) {

  const isPrevButtonDisabled = activeImgId === 1;
  const isNextButtonDisabled = activeImgId === thumbnailsCount;

  return (
    <div className='slider-controls'>
      <button
        className={`slider-controls__button slider-controls__button--prev ${isPrevButtonDisabled ? 'slider-controls__button--disabled' : ''}`}
        disabled={isPrevButtonDisabled}
        onClick={onPrevClick}
      >
        <span className='visually-hidden'>Предыдущее изображение</span>
      </button>
      <div className='slider-controls__thumbnails thumbnails'>
        {images.map((image) =>
          <img key={`thumb_${image.id}`} className={`thumbnails__image ${image.id === activeImgId ? 'thumbnails__image--active' : ''}`} alt='thumb' src={image.src} width='128' height='80'/>)}
      </div>
      <button
        className={`slider-controls__button slider-controls__button--next ${isNextButtonDisabled ? 'slider-controls__button--disabled' : ''}`}
        disabled={isNextButtonDisabled}
        onClick={onNextClick}
      >
        <span className='visually-hidden'>Предыдущее изображение</span>
      </button>
    </div>
  );
}

SliderControls.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  })),
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  activeImgId: PropTypes.number.isRequired,
  thumbnailsCount: PropTypes.number.isRequired,
};

export default SliderControls;

