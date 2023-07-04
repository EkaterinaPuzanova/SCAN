import React, { useContext, useState , useEffect} from 'react';
import css from './header.module.css';
import Menu from './menu/Menu';
import Logo from '../logo/Logo';
import AccountControlPanel from './account-control-panel/AccountControlPanel';
import UserInfo from './UserInfo/UserInfo';
import { Context } from '../../context';
//import Loader from '../UI/Loader/Loader';
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import burger from "./burger.svg";
import MyModal from '../UI/MyModal/MyModal';
import InfoAccount from './UserInfo/InfoAccount/InfoAccount';
import InfoResults from './UserInfo/InfoResults/InfoResults';


function Header() {
  const {store} = useContext(Context);
  const [modal, setModal] = useState(false);
 
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
          <div className={css.burger}> 
              <button className={css.burgerBtn} onClick={() => setModal(true)}>
                    <img src={burger} alt="burger" />
              </button>
              {store.isAuth ? <div style={{marginRight:"55px"}}><InfoResults /></div> : ''}
              <MyModal visible={modal} setVisible={setModal}>
                    {store.isAuth
                    ?
                    <InfoAccount />
                    :
                    <AccountControlPanel />
                    }
              </MyModal>
          </div>
          <div className={css.notBurger}>
              {store.isAuth
              ?
              <UserInfo />
              :
              <AccountControlPanel />
              }
          </div>
          
          {/* {window.innerWidth <= 340 ?
          <div>
              <button className={css.burger} onClick={() => setModal(true)}>
                <img src={burger} alt="burger" />
              </button>
              {store.isAuth? <InfoResults />: ''}
              <MyModal visible={modal} setVisible={setModal}>
                {store.isAuth
                ?
                <InfoAccount />
                :
                <AccountControlPanel />
                }
              </MyModal>
              </div>
          :
          store.isAuth
            ?
            <UserInfo />
            :
            <AccountControlPanel />
          }
           */}
          {/* {store.isAuth
          ?
          <UserInfo />
          :
          <AccountControlPanel />
          } */}
        </div>
      </div>
  </header>
  )
}

export default observer(Header);