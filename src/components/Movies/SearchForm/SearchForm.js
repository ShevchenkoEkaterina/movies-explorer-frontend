import React from 'react';
import find from '../../../images/find.svg';

function SearchForm() {

  return(
    <div className="searchForm">
      <form className="searchForm__form">
        <img className="searchForm__findIcon" src={find} alt="Лупа"/>
        <input 
          name="searchForm" 
          className="searchForm__input-text" 
          placeholder="Фильм" 
          />
        <button type="submit" className="searchForm__button">Найти</button>
        <div className="searchForm__line"></div>
        <div className="searchForm__checkbox">
          <input 
            name="checkbox"
            type='checkbox'
            id="checkbox"
            className="searchForm__input-checkbox" 
          />
          <div className="searchForm__slidinggroove"><span className="ontext"></span><span className="offtext"></span></div>
        </div>
        <p className="searchForm__input-checkbox_description">Короткометражки</p>
      </form>
      <div className="searchForm__downLine"></div>
    </div>
    )
  }

export default SearchForm;