import React from 'react';
import css from './infoResults.module.css';

function InfoResults() {
  return (
    <div className={css.infoResults}>
      <p className={css.infoResults__info}>
        Использовано компаний
        <span className={css.infoResults__result} style={{color: 'black'}}> 34</span>
      </p>
      <p className={css.infoResults__info}>
        Лимит по компаниям
        <span className={css.infoResults__result} style={{color: '#8AC540'}}> 100</span>
      </p>
  </div>
  )
}

export default InfoResults;