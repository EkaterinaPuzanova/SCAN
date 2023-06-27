import React from 'react';
import css from './search.module.css';
import iconDocument from './assets/iconDocument.svg';
import imgSearch from './assets/imgSearch.svg';
import iconFolders from './assets/iconFolders.svg';
import FormSearch from './formSearch/FormSearch';


function Search() {
  return (
    <main className={css.search}>
      <div className='container'>
        <div className={css.search__wrapper}>
          <h2 className={`title ${css.search__title}`}>
              Найдите необходимые данные в пару кликов.</h2>
          <p className={css.search__explanation}>
              Задайте параметры поиска.<br />Чем больше заполните, тем точнее поиск
          </p>
          <div className={css.search__form}>
            <FormSearch />
          </div>
          <div className={css.search__imgSearch}>
            <img className={css.imgSearch} src={imgSearch} alt='imgSearch' />
          </div>
          <div className={css.search__iconDocument}>
            <img className={css.iconDocument} src={iconDocument} alt='iconDocument' />
          </div>
          <div className={css.search__iconFolders}>
            <img className={css.iconFolders} src={iconFolders} alt='iconFolders' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Search;