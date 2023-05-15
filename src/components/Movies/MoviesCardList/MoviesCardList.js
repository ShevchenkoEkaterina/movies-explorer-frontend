import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

  return(
    <div className="cardlist">
      <div className="cardlist__elements">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </div>
      <button type="submit" className="cardlist__button">Ещё</button>
    </div>
    )
  }

export default MoviesCardList;