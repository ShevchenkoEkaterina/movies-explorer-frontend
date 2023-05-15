import React from 'react';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard() {

  return(
    <MoviesCardForm children={<button className="saving">Сохранить</button>}/>
    )
  }

export default MoviesCard;