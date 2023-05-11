import React from 'react';
import Delete from '../../../images/delete.svg';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard() {

  return(
      <MoviesCardForm children={<img className="removal" src={Delete} alt="Удалить"/>}/>
    )
  }

export default MoviesCard;