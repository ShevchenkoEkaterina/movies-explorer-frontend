import React from 'react';

function MoviesCardForm(props) {

  return(
    <div className="card">
      <div className="card__description">
        <p className="card__description_name">{props.nameRU}</p>
        <p className="card__description_duration">{props.duration}</p>
      </div>
        <img className="card__image" src={props.image} alt={props.nameRU}/>
      {props.children}
    </div>
    )
  }

export default MoviesCardForm;