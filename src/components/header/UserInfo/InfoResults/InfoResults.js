import React, { useContext } from 'react';
import css from './infoResults.module.css';
import { Context } from '../../../../context';
import { observer } from "mobx-react-lite";

function InfoResults() {
  const {store} = useContext(Context);
  return (
    <div className={css.infoResults}>
      <p className={css.infoResults__info}>
        Использовано компаний
        <span className={css.infoResults__result} style={{color: 'black'}}>
          {' ' + store.usedCompanyCount}</span>
      </p>
      <p className={css.infoResults__info}>
        Лимит по компаниям
        <span className={css.infoResults__result} style={{color: '#8AC540'}}> 
          {' ' + store.companyLimit}</span>
      </p>
  </div>
  )
}

export default observer(InfoResults);