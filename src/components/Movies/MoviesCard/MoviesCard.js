import React from 'react';
import save from '../../../images/save.svg';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard() {

  return(
    <div>
      <MoviesCardForm action={save} actionName="Сохранить"/>
    </div>
    )
  }

export default MoviesCard;