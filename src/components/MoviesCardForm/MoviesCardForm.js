import React from 'react';
import film from '../../images/film.png';

function MoviesCardForm(props) {

  return(
    <div className="card">
      <div className="card__description">
        <p className="card__description_name">В погоне за Бэнкси</p>
        <p className="card__description_duration">27 секунд</p>
      </div>
      <img className="card__image" src={film} alt="Заставка фильма"/>
      {props.children}
    </div>
    )
  }

export default MoviesCardForm;