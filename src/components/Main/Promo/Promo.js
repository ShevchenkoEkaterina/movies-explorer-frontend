import React from 'react';
import logo from '../../../images/logo.svg';
import planet from '../../../images/planet.png';
import { Link } from 'react-router-dom';
import Login from '../../Login/Login';
import Register from '../../Register/Register';

function Promo() {
return (
    <div className="promo">
      <div className="promo__up">
        <img className="promo__logo" alt="logo" src={logo}/>
        <div className="promo__sign">
          <Link to="/signup" className="promo__sign_signup" component={<Register/>}>Регистрация</Link>
          <button className="promo__sign_signin">
            <Link className="promo__sign_signin-button" to="/signin" component={<Login/>}>Войти</Link>
          </button>
        </div>
      </div>
      <div className="promo__down">
        <div className="promo__down_words">
          <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
          <h3 className="promo__description">Листайте ниже, чтобы узнать про этот проект и его создателя.</h3>
          <a type="button" href="#aboutProject" className="promo__button_more">Узнать больше</a>
        </div>
      <img className="promo__image" alt="planet" src={planet}/>
      </div>
    </div>
  );
}

export default Promo;