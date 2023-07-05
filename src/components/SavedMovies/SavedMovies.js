import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

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
        movieDelete={props.movieDelete}
        filtered={props.filtered}/>
      <Footer />
    </div>
  )
  }

export default SavedMovies;