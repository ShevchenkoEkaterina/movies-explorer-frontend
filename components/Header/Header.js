import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import accountIcon from '../../images/account_icon.svg';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import HeaderPopup from './HeaderPopup/HeaderPopup';

function Header() {

  const [isHeaderPopupOpen, setHeaderPopupOpen] = useState(false);

  function handleHeaderPopupClick() {
    setHeaderPopupOpen(true);
  }

  function closeHeaderPopup() {
    setHeaderPopupOpen(false);
  }

  return (
    <header className="header">
      <Link to="/" component={<Main/>}><img className="header__logo" src={logo} alt="Логотип"/></Link>
      <p className="header__movies">
        <Link to="/movies" className="header__movies_name" component={<Movies/>}>Фильмы</Link>
      </p>
      <p className="header__savedmovies">
        <Link to="/saved-movies" className="header__savedmovies_name" component={<SavedMovies/>}>Сохраненные фильмы</Link>
      </p>
      <div className="header__account">
      <p className="header__account_word">
        <Link to="/profile" className="header__account_word-name" component={<Profile/>}>Аккаунт </Link>
        </p>
        <img className="header__account_icon" src={accountIcon} alt="Аккаунт"/>
      </div>
      <ul onClick={handleHeaderPopupClick} className="header__menu">
        <li className="header__menu_line"></li>
        <li className="header__menu_line"></li>
        <li className="header__menu_line"></li>
      </ul>
      <HeaderPopup isOpen={isHeaderPopupOpen} onClose={closeHeaderPopup}/>
    </header>
  );
}

export default Header;