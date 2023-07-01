import React, { useContext } from 'react';
import css from './infoAccount.module.css';
import MyButton from '../../../UI/MyButton/MyButton';
import { Context } from '../../../../context';
import { observer } from "mobx-react-lite";

function InfoAccount() {
  const {store} = useContext(Context);
  

  return (
    <div className={css.infoAccount}>
      <div className={css.infoAccount__account}>
        <p className={css.account}>
          {localStorage.getItem('account')}
        </p>
        <MyButton
          style={{fontSize: '10px', color: 'rgba(0, 0, 0, .4)', margin: '0', padding: '0'}}
          onClick={() => store.logout()}>
            Выйти
        </MyButton>
      </div>
      <div className={css.infoAccount__foto}>

      </div>
  </div>
  )
}

export default observer(InfoAccount);