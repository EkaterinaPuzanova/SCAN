import React, { useContext, useEffect } from 'react';
import css from './documents.module.css';
import MyButton from '../UI/MyButton/MyButton';
import { Context } from '../../context';
import { observer } from "mobx-react-lite";

import img1 from './img1.svg';

const data = [
  {
    id: 1,
    info1: '13.09.2021',
    info2: 'Комсомольская правда KP.RU',
    h4: 'Скиллфэктори - лучшая онлайн-школа для будущих айтишников',
    info3: 'Технические новости',
    urlImg: img1,
    content: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
    
    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    info4: '2 543 слова'
  },
  {
    id: 2,
    info1: '13.09.2021',
    info2: 'Комсомольская правда KP.RU',
    h4: 'Скиллфэктори - лучшая онлайн-школа для будущих айтишников',
    info3: 'Технические новости',
    urlImg: img1,
    content: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
    
    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    info4: '2 543 слова'
  }
]


function Documents() {

  const {store} = useContext(Context);
  // let arrDocuments = store.resultObjectSearchDate.map((item) => (item.encodedId));
  // console.log(arrDocuments);

  // useEffect(() => {
  //   store.getDocuments(store.resultObjectSearchDate.slice(0, 10));
  //   console.log('llol',store.documents)
  // }, [])
  // if (!store.isFindResult ) {
  //   return <div className={css.error}>Идет поиск</div>
  // }

  return (
    <div className={css.documents}>
      <div className={css.documents__wrapper}>
        {/* {store.isLoadingDocuments
        ?
        <div className={css.error}>Идет поиск</div>
        :         */}
        {store.documents.map((item) => (
          <div className={css.documents__document} key={item.id}>
            <div className={css.documents__wrapperInfo1Info2}>
              <p className={css.documents__Info1}>{new Date(item.issueDate).toLocaleDateString()}</p>
              <p className={css.documents__Info2}>{item.source.name}</p>
            </div>
            <h4 className={css.documents__title}>{item.title.text}</h4>
            <div className={css.documents__info3}>
              {item.attributes.isTechNews}
            </div>
            <div className={css.documents__wrapperImg}>
              <img className={css.imgDocument} src={'r'} alt='imgDocument' />
            </div>
            <div className={css.documents__wrapperContent}>
              <p className={css.documents__content}>wefd</p>
            </div>
            <MyButton className={css.documents__MyButton}>Читать в источнике</MyButton>
            <p className={css.documents__info4}>{item.attributes.wordCount} слова</p>
          </div>
        ))}
      </div>
      <div className={css.documents__button}>
        <MyButton className={css.formDocuments__MyButton}>Показать больше</MyButton>
      </div>
    </div>
  )
}

export default observer(Documents);