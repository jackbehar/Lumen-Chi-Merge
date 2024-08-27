import * as PropTypes from 'prop-types';
import React from 'react';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/carousel/
 * @uxpindescription Carousel provides the functionality of sequentially displaying and switching between slides with any type of elements
 */
export default function Carousel(props) {
  const WrappedCarousel = ReactWrapper('chi-carousel');

  return (
    <WrappedCarousel {...props}>
      <div className="-d--flex" slot="items">
        {props.children.map((item, key) => {
          return <div className="chi-carousel__item -p--1">{item}</div>;
        })}
      </div>
    </WrappedCarousel>
  );
}

Carousel.propTypes = {
  /** Carousel Items */
  children: PropTypes.node,
  /** To render Carousel with dot controllers */
  autoplay: PropTypes.bool,
  /** To render Carousel with dot controllers */
  dots: PropTypes.bool,
  /** To set the interval for the autoplay */
  interval: PropTypes.number,
  /** To render Carousel without Button Controllers */
  noButtonControllers: PropTypes.bool,
  /** To render Carousel with pagination indicators */
  pagination: PropTypes.bool,

  /** To render Carousel with a single item per view */
  single: PropTypes.bool,
  /** Triggered when the user navigates to another view */
  chiViewChange: PropTypes.func,
};
