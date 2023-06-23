import React from 'react';
import css from './section2.module.css';
import Carousel from './Carousel/Carousel';

function Section2() {
  return (
    <section className={css.section2}>
      <div className='container'>
        <div className={css.section2__wrapper}>
          <h2 className={`title ${css.section2__title}`}>ПОЧЕМУ ИМЕННО МЫ</h2>
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Section2;