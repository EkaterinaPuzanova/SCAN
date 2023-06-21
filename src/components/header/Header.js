import React from 'react';
import css from './header.module.css';
import Menu from './menu/Menu';
import Logo from '../UI/logo/Logo';
//import AccountControlPanel from './account-control-panel/AccountControlPanel';
import UserInfo from './UserInfo/UserInfo';

function Header() {
  return (
    <header className={css.header}>
      <div className='container'>
        <div className={css.header__wrapper}>
          <Logo data={{id: 'logoHeader', background: '#029491', color: '#ffffff'}} />
          <Menu />
          {/* <AccountControlPanel /> */}
          <UserInfo />
        </div>
      </div>
  </header>
  )
}

export default Header;