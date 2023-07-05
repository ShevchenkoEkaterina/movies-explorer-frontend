import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {

  return (
    <div >
      <Header />
      <SearchForm handleSubmitSearch={props.handleSubmitSearch} handleToggle={props.handleToggle}/>
      <MoviesCardList 
        Movies={props.movies} 
        preloader={props.preloader} 
        requestError={props.requestError}
        notFoundError={props.notFoundError} 
        handleSubmitMore={props.handleSubmitMore}
        movieSave={props.movieSave}
        filtered={props.filtered}/>
      <Footer />
    </div>
  )
}

export default Movies;