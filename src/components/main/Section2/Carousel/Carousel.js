import React from 'react';
import Slider from "react-slick";
import css from './css/carousel.module.css';
import './css/slick.css'; 
import './css/slick-theme.css';
import Slide from './Slide/Slide';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };
  return (
    <div className={css.carousel}>
      <Slider {...settings}>
        
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        
      </Slider>
    </div>
  )
}

export default Carousel;