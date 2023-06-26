import React from 'react';
import css from './currentTariff.module.css';

function CurrentTariff() {
  return (
    <div className={css.currentTariff}>
      <p className={css.currentTariff__text}>Текущий тариф</p>
  </div>
  )
}

export default CurrentTariff;