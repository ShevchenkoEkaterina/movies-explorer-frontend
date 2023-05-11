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
    </div>
    )
  }

export default MoviesCardList;