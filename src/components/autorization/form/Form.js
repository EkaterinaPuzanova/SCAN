import React from 'react';
import css from './form.module.css';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';
import iconLink1  from '../assets/iconLink1.svg';
import iconLink2 from '../assets/iconLink2.svg';
import iconLink3 from '../assets/iconLink3.svg';

function Form() {
  return (
    // < className={css.form} onSubmit={login}>
    <form className={css.form}>
      <div className={css.form__wrapperButton}>
        <MyButton style={{borderBottom: `2px solid var(--color-main-dark)`,
                          margin: '0',
                          color:`var(--color-main-dark)`,
                          width: '151px',
                          fontSize: '16px',
                          paddingBottom: '8px',
                          borderRadius: '0'}}>Войти</MyButton>
        <MyButton style={{width: '213px',
                          margin: '0',
                          borderBottom: `2px solid var(--color-opacity)`,
                          fontSize: '16px',
                          paddingBottom: '8px',
                          borderRadius: '0'}}>Зарегистрироваться</MyButton>
      </div>
      <label for="login" className={css.label}>
        Логин или номер телефона:
        <MyInput id="login" type="text" placeholder=""/>
      </label>
      <label for="password" className={css.label}>
        Пароль:
        <MyInput id="password" type="text" placeholder=""/>
      </label>
      <MyButton style={{padding: '16px 0',
                            borderRadius: '5px',
                            color: 'white',
                            background: `var(--color-theme2)`,
                            fontFamily: 'Inter-Medium',
                            fontSize: '22px',
                            margin: '0',
                            marginTop: '30px',
                            width: '100%'
                            }}>Войти</MyButton>
      <div style={{textAlign: 'center'}}>
        <MyButton style={{marginTop: '15px',
                          //borderBottom: `2px solid var(--color-theme2)`,
                          textDecoration: 'underline',
                          //borderRadius: '0',
                          // paddingBottom: '2px',
                          padding: '0',
                          color:`var(--color-theme2)`,
                          width: '160px',
                          fontSize: '14px'}}>Восставновить пароль</MyButton>
      </div>
      <p className={css.form__explanation}>Войти через:</p>
      <ul className={css.form__loginLinks}>
        <li className={css.form__loginLink}><a href="##">
            <img src={iconLink1} alt="iconLink"/>
          </a></li>
        <li className={css.form__loginLink}><a href="##">
            <img src={iconLink2} alt="iconLink"/>                
          </a></li>
        <li className={css.form__loginLink}><a href="##">
            <img src={iconLink3} alt="iconLink"/>  
          </a></li>
      </ul>
      
    </form>
  )
}

export default Form;