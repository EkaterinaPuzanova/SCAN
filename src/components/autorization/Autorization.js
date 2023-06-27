import React from 'react';
import css from './autorization.module.css';
import img from './assets/imgAutorization.svg';
import icon from './assets/iconAutorization.svg';
import Form from './form/Form';

function Autorization() {
  return (
    <main className={css.autorization}>
      <div className='container'>
        <div className={css.autorization__wrapper}>
          <h2 className={`title ${css.form__title}`}>
            Для оформления подписки на тариф, необходимо авторизоваться.</h2>
          <div className={css.autorization__imgWrapper}>
            <img className={css.autorization__img} src={img} alt='autorization-img' />
          </div>
          <div className={css.autorization__iconWrapper}>
            <img className={css.autorization__icon} src={icon} alt='icon' />
          </div>
          <div className={css.autorization__formWrapper}>
            <Form />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Autorization;