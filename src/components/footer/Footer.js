import React from 'react';
import css from './footer.module.css';
import Logo from '../UI/logo/Logo';
import ContactInfo from './ContactInfo/ContactInfo';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className='container'>
        <div className={css.footer__wrapper}>
          <Logo data={{id: 'logoFooter', background: '#ffffff', color: '#029491'}}/>
          <ContactInfo />
        </div>
      </div>
  </footer>
  )
}

export default Footer;