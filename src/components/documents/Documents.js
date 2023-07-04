import React, { useContext } from 'react';
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
  // let arrDocuments = store.resultObjectSearchDate.map((item) => (item.encodedId));
  // console.log(arrDocuments);

  // useEffect(() => {
  //   store.getDocuments(store.resultObjectSearchDate.slice(0, 10));
  //   console.log('llol',store.documents)
  // }, [])
  // if (!store.isFindResult ) {
  //   return <div className={css.error}>Идет поиск</div>
  // }
  // item.title.text.length > 62
  // ?
  // item.title.text.slice(0, 62) + '...'
  // :
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
            <NavLink to={item.url} target="_blank" style={{color: 'black'}}>
          
              
              <h4 className={css.documents__title}>{item.title.text}</h4>
          
              
            </NavLink>
            <div className={css.documents__info3} style={item.attributes.isTechNews
                                                        ?
                                                        'Технические новости'
                                                        :
                                                        (item.attributes.isAnnouncement ? 'Анонсы и события' : (item.attributes.isDigest ? 'Cводки новостей' : {background: 'white'}))}>
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
        <MyButton className={css.formDocuments__MyButton}>Показать больше</MyButton>
      </div>
    </div>
  )
}

export default observer(Documents);