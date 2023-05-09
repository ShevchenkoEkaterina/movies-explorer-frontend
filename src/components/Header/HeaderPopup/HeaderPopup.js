import React from 'react';
import accountIcon from '../../../images/account_icon.svg';
import { Link } from 'react-router-dom';
import Main from '../../Main/Main';
import Movies from '../../Movies/Movies';
import SavedMovies from '../../Movies/Movies';
import Profile from '../../Profile/Profile';

function HeaderPopup(props) {
  return (
    <div className={`HeaderPopup ${props.isOpen ? 'HeaderPopup_opened' : ' '}`}>
      <div className="HeaderPopup__container">
        <button onClick={props.onClose} type="button" className="HeaderPopup__close"></button>
          <p className="headerPopup__link">
            <Link to="/" component={<Main/>}>Главная</Link>
          </p>
          <p className="headerPopup__link">
            <Link to="/movies" component={<Movies/>}>Фильмы</Link>
          </p>
          <p className="headerPopup__link">
            <Link to="/saved-movies" component={<SavedMovies/>}>Сохраненные фильмы</Link>
          </p>
        <div className="headerPopup__account">
          <Link to="/profile" className="headerPopup__account_word" component={<Profile/>}>Аккаунт <img className="headerPopup__account_icon" src={accountIcon} alt="Аккаунт"/></Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderPopup;