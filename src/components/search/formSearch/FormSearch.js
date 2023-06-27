import React from 'react';
import css from './formSearch.module.css';
import { data } from '../assets/data';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';

function FormSearch() {
  return (
    <form className={css.formSearch}>
      <div className={css.formSearch__wrapperSelect}>

        <label htmlFor="inputFormSearch1" className={css.formSearch__labelMyInput}>
          ИНН компании*
          <MyInput id="inputFormSearch1"
                className={css.formSearch__MyInput}
                style={{display: 'block',
                        width: '242px',
                        marginTop: '18px'}}
                type="number"
                placeholder="10 цифр"/>
        </label>

        <div className={css.selectWrapper}>
          <label htmlFor="select1" className={css.selectWrapper__label}>Тональность</label>
          <select id='select1' className={css.selectWrapper__select} defaultValue={'3'}>
              <option value="1">Позитивная</option>
              <option value="2">Негативная</option>
              <option value="3">Любая</option>
          </select>
        </div>

        <label htmlFor="inputFormSearch2" className={css.formSearch__labelMyInput}>
          Количество документов в выдаче*
          <MyInput id="inputFormSearch2"
                className={css.formSearch__MyInput}
                style={{display: 'block',
                        width: '242px',
                        marginTop: '19px'}}
                type="number"
                placeholder="От 1 до 1000"/>
        </label>

        <fieldset>
          <legend className={css.formSearch__legend}>Диапазон поиска*</legend>
            
            <MyInput id='inputFormSearch3'
                  className={css.formSearch__MyInput + ' ' + css.formSearch__inputDate}
                  style={{width: '176px',
                          marginTop: '19px'}}
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  type="text"
                  placeholder="Дата начала"/>
            <MyInput id="inputFormSearch4"
                  className={css.formSearch__MyInput + ' ' + css.formSearch__inputDate}
                  style={{width: '176px',
                          marginTop: '19px'}}
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  type="text"
                  placeholder="Дата конца"/>
        </fieldset>

      </div>
      <div className={css.formSearch__wrapperCheckbox}>
        {data.map((item) => (
          <div className={css.checkbox} key={item.id}>
            <input className={css.checkbox__input} type="checkbox" id={'checkbox_' + item.id} />
            <label className={css.checkbox__label} htmlFor={'checkbox_' + item.id}>{item.label}</label>
          </div>
        ))}
      </div>

      <div className={css.formSearch__wrapperButton}>
          <MyButton className={css.formSearch__MyButton}>Поиск</MyButton>
          <p>* Обязательные к заполнению поля</p>
      </div>
    </form>
  )
}

export default FormSearch;