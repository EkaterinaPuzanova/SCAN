import React from 'react';
import css from './userInfo.module.css';
//import Loader from '../../UI/Loader/Loader';
import InfoResults from './InfoResults/InfoResults';
import InfoAccount from './InfoAccount/InfoAccount';

function UserInfo() {
  return (
    <div className={css.userInfo}>
      <div className={css.wrapperResults}>
        <InfoResults />
        {/* <Loader width='24' height='24'/> */}
      </div>
      <div className={css.wrapperAccount}>
        <InfoAccount />
      </div>
  </div>
  )
}

export default UserInfo;