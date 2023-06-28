import React from 'react';
import css from './result.module.css';
import imgResult from './assets/imgResult.svg';
import Documents from '../documents/Documents';
import CarouselResult from '../carouselResult/CarouselResult';

function Result() {
  return (
    <main className={css.result}>
      <div className='container'>
        <div className={css.result__wrapper}>
          <h2 className={`title ${css.result__title}`}>
            Ищем. Скоро<br />будут результаты</h2>
          <p className={css.result__explanation}>
            Поиск может занять некоторое время,<br />просим сохранять терпение.
          </p>
          <div className={css.result__imgResult}>
            <img className={css.imgResult} src={imgResult} alt='imgResult' />
          </div>
          <div className={css.result__wrapperCarousel}>
            <h3 className={css.result__titleSecond}>Общая сводка</h3>
            <p className={css.result__explanationSecond}>Найдено 4 221 вариантов</p>
            <CarouselResult />
          </div>
          <div className={css.result__wrapperDocuments}>
            <h3 className={css.result__titleSecond} style={{marginTop: '107px'}}>Список документов</h3>
            <Documents />
          </div>
        </div>
      </div> 
    </main>
  )
}

export default Result;