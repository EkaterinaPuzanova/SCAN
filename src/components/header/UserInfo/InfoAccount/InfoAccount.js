import React from 'react';
import css from './infoAccount.module.css';
import MyButton from '../../../UI/MyButton/MyButton';

function InfoAccount() {
  return (
    <div className={css.infoAccount}>
      <div className={css.infoAccount__account}>
        <p className={css.account}>
          Алексей C.
        </p>
        <MyButton
          style={{fontSize: '10px', color: 'rgba(0, 0, 0, .4)', margin: '0', padding: '0'}}>
            Выйти
        </MyButton>
      </div>
      <div className={css.infoAccount__foto}>

      </div>
  </div>
  )
}

export default InfoAccount;