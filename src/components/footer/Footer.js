import React from 'react';
import css from './footer.module.css';
import Logo from '../logo/Logo';
import ContactInfo from './ContactInfo/ContactInfo';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className='container'>
        <div className={css.footer__wrapper}>
          <NavLink to="/main">
            <Logo data={{id: 'logoFooter', background: '#ffffff', color: '#029491'}}/>
          </NavLink>
          <ContactInfo />
        </div>
      </div>
  </footer>
  )
}

export default Footer;