import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import mainApi from '../utils/MainApi';
import * as auth from '../utils/Auth';
import CurrentUserContext from "../contexts/CurrentUserContext";
import Main from './Main/Main';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import ProtectedRoute from "../utils/ProtectedRoute";
import moviesApi from '../utils/MoviesApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [myMovies, setmyMovies] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [requestError, setRequestError] = useState(false)
  const [notFoundError, setnotFoundError] = useState(false)
  const [page, setPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getUserData(token)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (isLoggedIn) {
      mainApi.getUserInfo(token)
        .then((result) => {
          setCurrentUser(result)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

function searchMovie(filterString) {
    setPreloader(true)
    moviesApi.getInitialMovies()
      .then((movies) => {
        const filtered = movies.filter((movie) => {
          const nameRU = movie.nameRU.toLowerCase();
          const nameEN = movie.nameEN.toLowerCase();
          const str = filterString.toLowerCase();

      if (isShort && movie.duration >= 40) {
        return false;
      }
      return nameRU.includes(str) || nameEN.includes(str);
    });

    localStorage.setItem("search", filterString);
    localStorage.setItem("isShort", String(isShort));
    localStorage.setItem('filtered', JSON.stringify(filtered));
    setPreloader(false)
    handleResizeMovie()
    console.log(filtered);
})
      .catch((err) => {
        console.log(err.message)
        setPreloader(false)
        setRequestError(true)

      })
  }

  function handleToggle(){
    localStorage.getItem('filtered', JSON.stringify(filtered));
    localStorage.getItem("isShort", String(isShort));
    searchMovie(isShort)
  };

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  function handleResizeMovie() {
    const filtered = JSON.parse(localStorage.getItem('filtered'))
    if (filtered === null) {
      return
    }
    if (screenWidth >= 1280) {
      setMovies(filtered.slice(0, 12))
      setPage(3)
    } 
    if (screenWidth > 480 && screenWidth < 1280) {
      setMovies(filtered.slice(0, 8))
      setPage(2)
    } 
    if (screenWidth <= 480) {
      setMovies(filtered.slice(0, 5))
      setPage(2)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResizeMovie()
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const filtered = JSON.parse(localStorage.getItem('filtered'))

  function handleMore() {
    const filtered = JSON.parse(localStorage.getItem('filtered'))
    setMovies(filtered.slice(0, movies.length + page))
  }

  function handleSubmitSearch(filterString) {
    searchMovie(filterString)
  }

  function handleSubmitRegistration(name, email, password) {
      auth.register(name, email, password)
        .then((res) => {
          if (res.statusCode !== 400) {
            navigate('/movies')
          }
        })
        .catch((error) => {
          console.log(error);
        });
  };

  function handleSubmitSignIn(email, password) {
    auth.signin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token)
          setIsLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data.name, data.email)
      .then((result) => {
        setCurrentUser(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmitSignOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    navigate('/signin');
  }

  function saved(res) {
    return myMovies.some(movie => movie.movieId === res.id && movie.owner === currentUser._id)
  }

  function handleSave(movie) {
    mainApi.addNewMovie({
      country: movie.country || ' ',
      director: movie.director || ' ',
      duration: movie.duration || 0,
      year: movie.year || ' ',
      description: movie.description || ' ',
      image: movie.image.url || ' ',
      trailerLink: movie.trailerLink || ' ',
      thumbnail: `https://api.nomoreparties.co/${movie.image.url}` || ' ',
      movieId: movie.id || 0,
      nameRU: movie.nameRU || ' ',
      nameEN: movie.nameEN || ' ',
  })
      .then((result) => {
        setmyMovies([result.data, ...myMovies]);
      })
      .catch((error) => {
        console.log(error);
      });
}

  function handleDelete(movie) {
    mainApi.removeMovie(movie._id)
      .then(() => {
        localStorage.setItem('filtered', JSON.stringify(myMovies.filter((item) => item !== movie)));
        setmyMovies(myMovies.filter((item) => item !== movie));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Routes>
      <Route path="/" element={<Main/>}/>
        <Route path="/signup" element={<Register handleSubmitRegistration={handleSubmitRegistration}/>}/>
        <Route path="/signin" element={<Login handleSubmitSignIn={handleSubmitSignIn}/>}/>
        <Route path="/movies" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <Movies movies={movies} 
              handleSubmitMore={handleMore} 
              handleToggle={handleToggle}
              handleSubmitSearch={handleSubmitSearch}
              preloader={preloader}
              requestError={requestError}
              notFoundErrorr={notFoundError}
              filtered={filtered}
              movieSave={handleSave}
              saved={saved} />
          </ProtectedRoute>
        }/>
        <Route path="/profile" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <Profile onUpdateUser={handleUpdateUser} handleSubmitSignOut={handleSubmitSignOut}/>
          </ProtectedRoute>
        }/>
        <Route path="/saved-movies" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <SavedMovies movies={myMovies}
              preloader={preloader}
              requestError={requestError}
              notFoundErrorr={notFoundError}
              filtered={filtered}
              movieDelete={handleDelete}
              handleSubmitMore={handleMore} 
              handleToggle={handleToggle}
              handleSubmitSearch={handleSubmitSearch} />
          </ProtectedRoute>
        }/>
      </Routes>
    </div>
  </CurrentUserContext.Provider>  
  )
}

export default App;