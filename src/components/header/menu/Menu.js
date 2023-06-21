import React from 'react';
import css from './menu.module.css';

function Menu() {
  return (
    <div className={css.menu}>
      <ul className={css.menu__items}>
        <li className={css.menu__item}>Главная</li>
        <li className={css.menu__item}>Тарифы</li>
        <li className={css.menu__item}>FAQ</li>
      </ul>
    </div>
  )
}

export default Menu;