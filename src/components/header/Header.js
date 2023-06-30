import React, { useContext } from 'react';
import css from './header.module.css';
import Menu from './menu/Menu';
import Logo from '../logo/Logo';
import AccountControlPanel from './account-control-panel/AccountControlPanel';
import UserInfo from './UserInfo/UserInfo';
import { Context } from '../../context';
import Loader from '../UI/Loader/Loader';
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";


function Header() {
  const {store} = useContext(Context);

  // const {isAuth, isLoading} = useContext(AuthContext);
  //   console.log(isAuth)

  //   if (isLoading) {
  //       return <Loader width='24' height='24'/>
  //   }


  return (
    <header className={css.header}>
      <div className='container'>
        <div className={css.header__wrapper}>
          <NavLink to="/main">
            <Logo data={{id: 'logoHeader', background: '#029491', color: '#ffffff'}} />
          </NavLink>
          <Menu />
          {store.isAuth
          ?
          <UserInfo />
          :
          <AccountControlPanel />
          }
        </div>
      </div>
  </header>
  )
}

export default observer(Header);