import React from 'react';
import css from './section2.module.css';
import Carousel from './Carousel/Carousel';
import  img  from './assets/img.svg';

function Section2() {
  return (
    <section className={css.section2}>
      <div className='container'>
        <div className={css.section2__wrapper}>
          <h2 className={`title ${css.section2__title}`}>ПОЧЕМУ ИМЕННО МЫ</h2>
          <Carousel />
          <div className={css.section2__image}>
            <img src={img} alt="img-section2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2;