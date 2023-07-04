import React, { useContext, useEffect } from 'react';
import css from './userInfo.module.css';
import Loader from '../../UI/Loader/Loader';
import InfoResults from './InfoResults/InfoResults';
import InfoAccount from './InfoAccount/InfoAccount';
import { Context } from '../../../context';
import { observer } from "mobx-react-lite";

function UserInfo() {
  const {store} = useContext(Context);

  useEffect(() => {
    store.getInfoAccount();
  }, [])  
  
  return (
    <div className={css.userInfo}>
      <div className={css.wrapperResults}>
        {store.isLoading
        ?
        <Loader width='24' height='24'/>
        :
        <InfoResults />
        }
      </div>
      <div className={css.wrapperAccount}>
        <InfoAccount />
      </div>
  </div>
  )
}

export default observer(UserInfo);