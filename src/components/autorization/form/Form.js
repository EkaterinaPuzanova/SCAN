import React, {useState} from 'react';
import css from './form.module.css';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';
import iconLink1  from '../assets/iconLink1.svg';
import iconLink2 from '../assets/iconLink2.svg';
import iconLink3 from '../assets/iconLink3.svg';

function Form() {
  const [data, setData] = useState({login: '', password: ''})

  const getEnter = (e) => {
    e.preventDefault();
    console.log(data);
    setData({login: '', password: ''})
  }

  return (
    <form className={css.form}>
      <div className={css.form__wrapperButton}>
        <MyButton className={css.form__btnEnterSmall}>Войти</MyButton>
        <MyButton className={css.form__btnEnterSmall + ' ' + css.form__btnLogin}>Зарегистрироваться</MyButton>
      </div>
      <label htmlFor="login" className={css.label}>
        Логин или номер телефона:
        <MyInput id="login" type="text" placeholder=""
                  value={data.login}
                  onChange={e => setData({...data, login: e.target.value})}/>
      </label>
      <label htmlFor="password" className={css.label}>
        Пароль:
        <MyInput id="password" type="password" placeholder=""
                  value={data.password}
                  onChange={e => setData({...data, password: e.target.value})}/>
      </label>
      <MyButton className={css.form__btnEnter} 
                  onClick={getEnter}>Войти</MyButton>
      <div style={{textAlign: 'center'}}>
        <MyButton className={css.form__btnRestore}>Восставновить пароль</MyButton>
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