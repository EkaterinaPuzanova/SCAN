import React, { useContext } from 'react';
import Slider from "react-slick";
import css from './css/carouselResult.module.css';
import './css/slick.css'; 
import './css/slick-theme.css';
import Loader from '../UI/Loader/Loader'
import { Context } from '../../context';
import { observer } from "mobx-react-lite";


function CarouselResult() {

  const {store} = useContext(Context);
  const arr = [];
  const arrTotalDocuments = [];

  if (store.isFindResultObjectSearch) {
    [...store.resultObjectSearch.data[1].data].reverse().map((item) => arr.push(item.value));
    [...store.resultObjectSearch.data[0].data].map((item) => arrTotalDocuments.push(item.value)); 
    store.setTotalResultDocuments(arrTotalDocuments.reduce((a, b) => a + b));
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 8,
    variableWidth: true,
  //   responsive: [
  //     {
  //         breakpoint: 600,
  //         settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 2
  //         }
  //     },
  //     {
  //         breakpoint: 480,
  //         settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1
  //         }
  //     }
  // ]
  };
  return (
    <div className={css.carouselResult} id='carouselResult'>
      <p className={css.result__explanationSecond}>Найдено {store.isFindResultObjectSearch  ? store.totalResultDocuments : ''} вариантов</p>
      <Slider {...settings}>

        {
          !store.isFindResultObjectSearch
          ?
          <div className={css.carouselResult__loader} >
            <Loader width='50' height='50'/>
            <p>Загружаем данные</p>
          </div>
          :
          
          [...store.resultObjectSearch.data[0].data].reverse().map((item, index) => (
            <div key={new Date()} style={{width: '140px', height: '138px'}}>
              <div className={css.carouselResult__item}>
                <p className={css.carouselResult__period}>{new Date(item.date).toLocaleDateString()}</p>
                <p className={css.carouselResult__total}>{item.value}</p>
                <p className={css.carouselResult__risks}>{arr[index]}</p>
              </div>
            </div>
            
          ))
          // [1,2,3,4,5,6,7,8,9,9,1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,13,3,5,6,5].map((item) => (
          //     <div key={item} style={{width: '140px', height: '138px'}}>
          //       <div className={css.carouselResult__item}>
          //         <p className={css.carouselResult__period}>{item}</p>
          //         <p className={css.carouselResult__total}>{item}</p>
          //         <p className={css.carouselResult__risks}>{item}</p>
          //       </div>
          //     </div>))
          }
      
      </Slider>
      <div className={css.carouselResult__header}>
        <p className={css.carouselResult__headerPeriod}>Период</p>
        <p className={css.carouselResult__headerTotal}>Всего</p>
        <p className={css.carouselResult__headerRisks}>Риски</p>
      </div>
    </div>
  )
}

export default observer(CarouselResult);