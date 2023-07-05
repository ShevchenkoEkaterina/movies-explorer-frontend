import { useState } from 'react'
import find from '../../../images/find.svg';
import FiterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [filterString, setFilterString] = useState('')

  function handleChangeFilterString(e) {
    setFilterString(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleSubmitSearch(filterString)
  }
  
  return(
    <div className="searchForm">
      <form className="searchForm__form">
        <img className="searchForm__findIcon" src={find} alt="Лупа"/>
        <input 
          name="searchForm" 
          className="searchForm__input-text" 
          placeholder="Фильм"
          required
          onChange={handleChangeFilterString} 
          />
        <button onClick={handleSubmit} type="submit" className="searchForm__button">Найти</button>
        <div className="searchForm__line"></div>
        <div className="fiterCheckbox">
        <FiterCheckbox handleToggle={props.handleToggle}/>
      </div>
      </form>
      <div className="searchForm__downLine"></div>
    </div>
    )
  }

export default SearchForm;