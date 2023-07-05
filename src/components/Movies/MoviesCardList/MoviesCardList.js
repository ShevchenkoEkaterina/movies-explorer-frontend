import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList(props) {

  return(
    <>
    {props.preloader ? <Preloader/> : '' }
    {props.requestError ? <span className="error__request">Во время запроса произошла ошибка. 
      Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> : '' }
      {props.notFoundError ? <span className="error__notFound">Ничего не найдено</span> : '' }
    <div className="cardlist">
      <div className="cardlist__elements">
      { props.Movies.map((movie) => (
          <MoviesCard
            movie={movie}
            saved = {props.saved}
            movieSave={props.movieSave}
          />
          ))}
      </div>
      {props.Movies.length < props.filtered.length ?
        <button onClick={props.handleSubmitMore} type="submit" className="cardlist__button">Ещё</button> : ''}
    </div>
    </>
    )
  }

export default MoviesCardList;