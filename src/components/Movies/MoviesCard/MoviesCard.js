import React from 'react';
import MoviesCardForm from '../../MoviesCardForm/MoviesCardForm';

function MoviesCard(props) {

  const handleSave = () => {
    props.movieSave(props.movie);
};


  return(
    <MoviesCardForm 
      nameRU={props.movie.nameRU}
      duration={props.movie.duration}
      image={`https://api.nomoreparties.co/${props.movie.image.url}`}
      children={
      // props.saved(props.movie) ? <button className="saved" type="button"></button> :
        <button onClick={handleSave} className="saving">Сохранить</button>}
      />
    )
  }

export default MoviesCard;