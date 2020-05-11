import './slider.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { Button } from 'shared/components';
import { getAdditionalData } from './utils';

export const SliderPage = ({ arrayForSlide, children, reference }) => {
  const [sliderArray, setArray] = useState([]);
  const [x, setX] = useState(0);
  const initialXPosition = 31;

  const getPlaylistSize = () => reference.current ? reference.current.offsetWidth + 2 * parseInt(getComputedStyle(reference.current).margin, 10) : 0;

  useEffect(() => {
    if (arrayForSlide.length > 0 && sliderArray.length === 0) {
      setArray(arrayForSlide);
    }
    setX(initialXPosition);
  }, []);

  const nextSlide = () => {
    const {
      rightBorder,
      width
    } = getAdditionalData(arrayForSlide, getPlaylistSize(), initialXPosition);

    if (rightBorder === x) {
      setX(initialXPosition);
    } else if (x - width <= rightBorder ) {
      setX(rightBorder);
    } else {
      setX(x - width);
    }
  };

  const prevSlide = () => {
    const {
      rightBorder,
      width
    } = getAdditionalData(arrayForSlide, getPlaylistSize(), initialXPosition);

    if (x === initialXPosition) {
      setX(rightBorder);
    } else if (x + width > initialXPosition) {
      setX(initialXPosition);
    } else {
      setX(x + width);
    }
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__items" style={{ transform: `translateX(${x}px)` }}>
          {children}
        </div>
        <div className="slider__button">
          <Button buttonStyle="sliderBtnLeft" onClick={prevSlide}>
            <MdNavigateBefore />
          </Button>
          <Button buttonStyle="sliderBtnRight" onClick={nextSlide}>
            <MdNavigateNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

SliderPage.propTypes = {
  arrayForSlide: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string
  })).isRequired,
  children: PropTypes.node.isRequired,
  reference: PropTypes.shape({ current: PropTypes.shape(Element) })
};

SliderPage.defaultProps = {
  reference: null
};
