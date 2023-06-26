import React from 'react';
import Slider from "react-slick";
import css from './css/carousel.module.css';
import './css/slick.css'; 
import './css/slick-theme.css';
import { data } from './assets/data';

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
        
        {data.map((item) => (
          <div key={item.id}>
            <div className={css.slide}>
              <div className={css.slide__img}>
                <img className={css.slide__icon} src={item.urlImg} alt='icon' />
              </div>
              <div className={css.slide__content}>
                <p className={css.slide__text}>{item.content}</p>
              </div>
            </div>
          </div>
          
        ))} 
        
      </Slider>
    </div>
  )
}

export default Carousel;