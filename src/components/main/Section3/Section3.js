import React, { useContext } from 'react';
import css from './section3.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import { data } from './assets/data';
import CurrentTariff from './CurrentTariff/CurrentTariff';
import { Context } from '../../../context';
import { observer } from "mobx-react-lite";

function Section3() {
  const {store} = useContext(Context);
  console.log(store.currentTariff)
  return (
    <section className={css.section3}>
      <div className='container'>
        <div className={css.section3__wrapper}>
          <h2 className={`title ${css.section3__title}`}>НАШИ ТАРИФЫ</h2>
          <div className={css.section3__cards}>

          {data.map((item) => (
            <div className={css.section3__card} key={item.id} style={(store.isAuth && (item.cardTitle === store.currentTariff))
                                                              ?
                                                              {border: `2px solid ${item.back}`}
                                                              :
                                                              {}}>
              <div className={css.section3__cardHeader} style={{background: item.back}}>
                <div className={css.section3__cardText} style={{color: item.color}}>
                  <p className={css.section3__cardTitle}>{item.cardTitle}</p>
                  <p className={css.section3__cardSubtTitle}>{item.cardSubtTitle}</p>
                </div>
                <div className={css.section3__cardImg}>
                  <img className={css.section3__icon} src={item.urlIcon} alt='icon' />
                </div>
              </div>
              <div className={css.section3__cardContent}>
                {(store.isAuth && (item.cardTitle === store.currentTariff))
                ?
                <CurrentTariff />
                :
                ''
                }
                <p className={css.section3__price}>{item.price1}<span>{item.price2}</span></p>
                <p className={css.section3__text}>{item.text}</p>
                <p className={css.section3__description}>В тариф входит:</p>
                <ul className={css.section3__items}>
                  <li className={css.section3__item}>&nbsp;{item.item1}</li>
                  <li className={css.section3__item}>&nbsp;{item.item2}</li>
                  <li className={css.section3__item}>&nbsp;{item.item3}</li>
                </ul>
                <MyButton style={{padding: '15px 64px',
                            background: `${(store.isAuth && (item.cardTitle === store.currentTariff)) ? `var(--color-theme9)` : `var(--color-theme2)`}`,
                            color: `${(store.isAuth && (item.cardTitle === store.currentTariff)) ? `var(--color-dark)` : `var(--color-light)`}`,
                            fontFamily: 'Inter-Regular',
                            fontSize: '18px',
                            margin: '0',
                            marginTop: '55px',
                            width: '100%'
                            }}>{(store.isAuth && (item.cardTitle === store.currentTariff))
                                ?
                                'Перейти в личный кабинет'
                                :
                                'Подробнее'}
                </MyButton>
              </div>
            </div>
          ))}

            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default observer(Section3);