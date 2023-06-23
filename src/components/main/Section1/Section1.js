import React from 'react';
import css from './section1.module.css';
import img from './assets/image.png';
import MyButton from '../../UI/MyButton/MyButton';

function Section1() {
  return (
    <section className={css.section1}>
      <div className='container'>
        <div className={css.section1__wrapper}>
          <div className={css.section1__content}>
            <h1 className={`title ${css.section1__title}`}>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О&nbsp;КОМПАНИИ ПО&nbsp;ЕГО&nbsp;ИНН</h1>
            <p className={css.section1__text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            <MyButton style={{padding: '15px 64px',
                              background: `var(--color-theme2)`,
                              color: 'white',
                              fontFamily: 'Inter-Medium',
                              fontSize: '22px',
                              margin: '0',
                              marginTop: '70px'
                              }}>Запросить данные</MyButton>
          </div>
          <div className={css.section1__img}>
            <img src={img} alt="img"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;