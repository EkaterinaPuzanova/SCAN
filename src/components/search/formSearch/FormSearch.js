import React, { useState, useContext} from 'react';
import css from './formSearch.module.css';
import { data } from '../assets/data';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';
import { observer } from "mobx-react-lite";
import { Context } from '../../../context';
import { ValidateInn } from './assets/ValidateInn';
import { useNavigate } from 'react-router-dom';

function FormSearch() {
  const router = useNavigate();
  const {store} = useContext(Context);
  const [innUncorrect, setInnUncorrect] = useState(false);
  const [dateUncorrect, setDateUncorrect] = useState(false);

  const [search, setSearch] = useState({
    inn: '',
    tonality: 'any',
    quantity: '',
    dateStart: '',
    dateEnd: '',
    checkbox1: '',
    checkbox2: null,
    checkbox3: '',
    checkbox4: '',
    checkbox5: '',
    checkbox6: '',
    checkbox7: '',
  });

  const getEnter = (e) => {
    e.preventDefault();
    let resultValidateInn = ValidateInn(+search.inn);
    if ((resultValidateInn) &&
        (new Date(search.dateStart) <= new Date()) &&
        (new Date(search.dateEnd) <= new Date()) &&
        (new Date(search.dateStart) <= new Date(search.dateEnd))) {
          store.getObjectSearch(search);
          store.getObjectSearchDate(search);
          store.setIsError(true);
          router('/result');
        } 
    if ((!resultValidateInn) &&
        ((new Date(search.dateStart) > new Date()) ||
        (new Date(search.dateEnd) > new Date()) ||
        (new Date(search.dateStart) > new Date(search.dateEnd)))) {
          setInnUncorrect(true);
          setDateUncorrect(true);
          return } 
    !resultValidateInn ?  setInnUncorrect(true) : setDateUncorrect(true);   
  }

  

  return (
    <form className={css.formSearch}>
      <div className={css.formSearch__wrapperSelect}>

        <label htmlFor="inputFormSearch1" className={css.formSearch__labelMyInput}>
          ИНН компании*
          <MyInput id="inputFormSearch1"
                className={css.formSearch__MyInput}
                style={innUncorrect ?
                        {border: '2px solid red',
                        display: 'block',
                        width: '242px',
                        marginTop: '18px',
                        color: 'red'}
                        :
                        {display: 'block',
                        width: '242px',
                        marginTop: '18px'}}
                type="number"
                placeholder="10 цифр"
                value={search.inn}
                onChange={(e) => {setSearch({...search, inn: e.target.value}); setInnUncorrect(false) }}/>
          {innUncorrect ?
            <p className={css.unCorrect}>Введите корректные данные</p> : ''}
        </label>

        <div className={css.selectWrapper}>
          <label htmlFor="select1" className={css.selectWrapper__label}>Тональность</label>
          <select id='select1' className={css.selectWrapper__select}
                  value={search.tonality}
                  onChange={(e) => setSearch({...search, tonality: e.target.value})}>
              <option key='positive' value="positive">Позитивная</option>
              <option key='negative' value="negative">Негативная</option>
              <option key='any' value="any">Любая</option>
          </select>
        </div>

        <label htmlFor="inputFormSearch2" className={css.formSearch__labelMyInput}>
          Количество документов в выдаче*
          <MyInput id="inputFormSearch2"
                className={css.formSearch__MyInput}
                style={{display: 'block',
                        width: '242px',
                        marginTop: '19px'}}
                value={search.quantity}
                type="number"
                placeholder="От 1 до 1000"
                onChange={(e) => setSearch({...search, quantity: e.target.value})}/>
        </label>

        <fieldset>
          <legend className={css.formSearch__legend}>Диапазон поиска*</legend>
            
            <MyInput id='inputFormSearch3'
                  className={css.formSearch__MyInput + ' ' + css.formSearch__inputDate}
                  style={dateUncorrect ?
                          {width: '176px',
                          marginTop: '19px',
                          border: '2px solid red',
                          color: 'red'} 
                          :
                          {width: '176px',
                          marginTop: '19px'}}
                  onChange={(e) => {setSearch({...search, dateStart: e.target.value}); setDateUncorrect(false)}}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  type="text"
                  placeholder="Дата начала"/>
            <MyInput id="inputFormSearch4"
                  className={css.formSearch__MyInput + ' ' + css.formSearch__inputDate}
                  style={dateUncorrect ?
                          {width: '176px',
                          marginTop: '19px',
                          border: '2px solid red',
                          color: 'red'} 
                          :
                          {width: '176px',
                          marginTop: '19px'}}  
                  onChange={(e) => {setSearch({...search, dateEnd: e.target.value}); setDateUncorrect(false)}}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  type="text"
                  placeholder="Дата конца"/>
          {dateUncorrect ?
              <p className={css.unCorrectDate}>Введите корректные данные</p> : ''}
        </fieldset>

      </div>
      <div className={css.formSearch__wrapperCheckbox}>
        {data.map((item) => (
          <div className={css.checkbox} key={item.id}>
            <input className={css.checkbox__input} type="checkbox" id={'checkbox_' + item.id} 
                    onChange={(e) => setSearch({...search, ['checkbox' + item.id]: e.target.value})}/>
            <label className={css.checkbox__label} htmlFor={'checkbox_' + item.id}>{item.label}</label>
          </div>
        ))}
      </div>

      <div className={css.formSearch__wrapperButton}>
          <MyButton className={css.formSearch__MyButton}
                    onClick={getEnter}
                    disabled={dateUncorrect ||
                              innUncorrect ||
                              search.inn === '' ||
                              search.dateEnd === '' ||
                              search.dateStart === '' ||
                              search.quantity === ''}>
                    Поиск
          </MyButton>
          <p>* Обязательные к заполнению поля</p>
      </div>
    </form>
  )
}

export default observer(FormSearch);