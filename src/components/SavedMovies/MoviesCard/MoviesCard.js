import React from 'react';
import Delete from '../../../images/delete.svg';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard(props) {

  const handleDelete = () => {
    props.movieDelete(props.movie.id);
  };

  return(
      <MoviesCardForm 
        nameRU={props.movie.nameRU}
        duration={props.movie.duration}
        image={`https://api.nomoreparties.co/${props.movie.image.url}`}
        children={<button onClick={handleDelete} className="removal"> 
          <img className="icon_removal" src={Delete} alt="Удалить"/>
          </button>}
        />
    )
  }

export default MoviesCard;