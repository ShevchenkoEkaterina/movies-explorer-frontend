import React from 'react';
import Delete from '../../../images/delete.svg';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard() {

  return(
    <div>
      <MoviesCardForm action={Delete} actionName="Удалить"/>
    </div>
    )
  }

export default MoviesCard;