import React from 'react';
import Delete from '../../../images/delete.svg';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard() {

  return(
      <MoviesCardForm children={<button className="removal"> <img className="icon_removal" src={Delete} alt="Удалить"/></button>}/>
    )
  }

export default MoviesCard;