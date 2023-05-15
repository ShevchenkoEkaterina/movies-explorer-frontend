import React from 'react';

function FilterCheckbox() {

  return(
    <div className="searchForm__checkbox">
      <input name="checkbox"
        type='checkbox'
        id="checkbox"
        className="searchForm__checkbox-input"/>
      <label for="checkbox" className="searchForm__checkbox-label">Toggle</label>
      <p className="searchForm__input-checkbox_description">Короткометражки</p>
    </div>
    )
  }

export default FilterCheckbox;