import React from 'react';
import css from './accountControlPanel.module.css';
import MyButton from '../../UI/MyButton/MyButton';

function AccountControlPanel() {
  return (
    <div className={css.accountControlPanel}>
      <MyButton style={{marginRight: '8px'}}>
        Зарегистрироваться        
      </MyButton>
      <div className={css.verticalLine}></div>
      <MyButton style={{background: '#7CE3E1', fontFamily: 'Inter-Medium', color: 'black'}}>
        Войти      
      </MyButton>
    </div>
  )
}

export default AccountControlPanel;