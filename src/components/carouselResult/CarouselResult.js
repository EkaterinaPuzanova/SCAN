import React from 'react';
import Slider from "react-slick";
import css from './css/carouselResult.module.css';
import './css/slick.css'; 
import './css/slick-theme.css';
//import Loader from '../UI/Loader/Loader'

const data = [
  {id: 1, period: '10.09.2021', total: '5', risks: '0'},
  {id: 2, period: '10.09.2021', total: '5', risks: '0'},
  {id: 3, period: '10.09.2021', total: '5', risks: '0'},
  {id: 4, period: '10.09.2021', total: '5', risks: '0'},
  {id: 5, period: '10.09.2021', total: '5', risks: '0'},
  {id: 6, period: '10.09.2021', total: '5', risks: '0'},
  {id: 7, period: '10.09.2021', total: '5', risks: '0'},
  {id: 8, period: '10.09.2021', total: '5', risks: '0'},
  {id: 9, period: '10.09.2021', total: '5', risks: '0'},
  {id: 3, period: '10.09.2021', total: '5', risks: '0'},
  {id: 4, period: '10.09.2021', total: '5', risks: '0'},
  {id: 5, period: '10.09.2021', total: '5', risks: '0'},
  {id: 6, period: '10.09.2021', total: '5', risks: '0'},
  {id: 7, period: '10.09.2021', total: '5', risks: '0'},
  {id: 8, period: '10.09.2021', total: '5', risks: '0'},
  {id: 9, period: '10.09.2021', total: '5', risks: '0'}
]


function CarouselResult() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 8,
    variableWidth: true,
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
    <div className={css.carouselResult}>
      <Slider {...settings}>

        {data.map((item) => (
          <div key={item.id} style={{width: '140px', height: '138px'}}>
            <div className={css.carouselResult__item}>
              <p className={css.carouselResult__period}>{item.period}</p>
              <p className={css.carouselResult__total}>{item.total}</p>
              <p className={css.carouselResult__risks}>{item.risks}</p>
            </div>
          </div>
          
        ))}
        {/* <div className={css.carouselResult__loader} >
          <Loader width='50' height='50'/>
          <p>Загружаем данные</p>
        </div> */}
      
      </Slider>
      <div className={css.carouselResult__header}>
        <p className={css.carouselResult__headerPeriod}>Период</p>
        <p className={css.carouselResult__headerTotal}>Всего</p>
        <p className={css.carouselResult__headerRisks}>Риски</p>
      </div>
    </div>
  )
}

export default CarouselResult;