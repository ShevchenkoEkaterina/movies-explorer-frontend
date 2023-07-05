import React from 'react';

function FilterCheckbox(props) {

  function handleToggleThis(e) {
    props.handleToggle()
  }

  return(
    <div className="searchForm__checkbox">
      <input name="checkbox"
        type='checkbox'
        id="checkbox"
        className="searchForm__checkbox-input"/>
      <label onClick={handleToggleThis} htmlFor="checkbox" className="searchForm__checkbox-label">Toggle</label>
      <p className="searchForm__input-checkbox_description">Короткометражки</p>
    </div>
    )
  }

export default FilterCheckbox;