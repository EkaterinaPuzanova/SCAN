import React from 'react';
import css from './contactInfo.module.css';

function ContactInfo() {
  return (
    <div className={css.contactInfo}>
      <ul className={css.contactInfo__items}>
        <li className={css.contactInfo__item}><a href="##">г. Москва, Цветной б-р, 40</a></li>
        <li className={css.contactInfo__item}><a href="##">+7 495 771 21 11</a></li>
        <li className={css.contactInfo__item}><a href="##">info@skan.ru</a></li>
      </ul>
      
      <p className={css.contactInfo__copyright}>Copyright. 2022</p>
  </div>
  )
}

export default ContactInfo;