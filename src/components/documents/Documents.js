import React, { useContext, useState } from 'react';
import css from './documents.module.css';
import MyButton from '../UI/MyButton/MyButton';
import { Context } from '../../context';
import { observer } from "mobx-react-lite";
import { getContent } from "./decode/index";
import { wordForm } from "./wordForm/index";
import imgResult from '../result/assets/imgResult.svg';
import { NavLink } from "react-router-dom";

function Documents() {

  const {store} = useContext(Context);

  const [end, setEnd] = useState(10);
  const length = store.documents[0].length;

  const getMoreDocuments = (e) => {
    e.preventDefault();
    console.log('yes')
    if ((length - end) < 10) {
      setEnd(length);
    } else {
      setEnd(end + 10)
    }
  }

  return (
    <div className={css.documents}>
      <div className={css.documents__wrapper}>
  
        {store.documents[0].slice(0, end).map((item) => (
          <div className={css.documents__document} key={item.id}>
            <div className={css.documents__wrapperInfo1Info2}>
              <p className={css.documents__Info1}>{new Date(item.issueDate).toLocaleDateString()}</p>
              <p className={css.documents__Info2}>{item.source.name}</p>
            </div>
            <NavLink to={item.url} target="_blank" style={{color: 'black'}}>
          
              
              <h4 className={css.documents__title}>{item.title.text}</h4>
          
              
            </NavLink>
            <div className={css.documents__info3} style={(item.attributes.isTechNews || item.attributes.isAnnouncement ||item.attributes.isDigest )? {}: {background: 'white'}}>
              {item.attributes.isTechNews
              ? 
              'Технические новости'
              : 
              (item.attributes.isAnnouncement ? 'Анонсы и события' : (item.attributes.isDigest ? 'Cводки новостей' : '')) }
            </div>
            <div className={css.documents__wrapperImg}>
              <img className={css.imgDocument} src={getContent(item.content.markup).bgUrl
                                                    ?
                                                    getContent(item.content.markup).bgUrl
                                                    :
                                                    imgResult} alt='imgDocument' />
            </div>
            <div className={css.documents__wrapperContent}>
              <p className={css.documents__content}>{getContent(item.content.markup).content}</p>
            </div>
            <NavLink to={item.url} target="_blank">
              <MyButton className={css.documents__MyButton}>Читать в источнике</MyButton>
            </NavLink>
            <p className={css.documents__info4}>{item.attributes.wordCount + ' ' + wordForm(+item.attributes.wordCount, ['слово','слова','слов'])}</p>
          </div>
        ))}
      </div>
      <div className={css.documents__button}>
        <MyButton className={css.formDocuments__MyButton} onClick={getMoreDocuments} disabled={end === length}>Показать больше</MyButton>
      </div>
    </div>
  )
}

export default observer(Documents);