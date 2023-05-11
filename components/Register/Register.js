import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Login from '../Login/Login';

function Register() {

  return (
    <div className="register">
      <img className="register__logo" src={logo} alt="Логотип"/>
      <p className="register__welcome">Добро пожаловать!</p>
      <form className="register__form">
        <label htmlFor="name" className="register__input">Имя
          <input 
            required 
            id="name" 
            name="name" 
            className="register__input-text" 
            type="text"/>
        </label>
        <label htmlFor="email" className="register__input">E-mail
          <input 
            required 
            id="email" 
            name="email" 
            className="register__input-text" 
            type="email"/>
        </label>
        <label htmlFor="password" className="register__input">Пароль
            <input 
              required 
              id="password" 
              name="password" 
              className="register__input-text" 
              type="password"/>
        </label>
        <button 
          type="submit" 
          className="register__button">
            Зарегистрироваться
        </button>
      </form>
      <div className="register__login">
        <p className="register__login_question">Уже зарегистрированы?</p>
        <div className="register__login_link">
          <Link to="/signin" component={<Login/>}>Войти</Link>
        </div>
      </div>
    </div>
  );
  }

export default Register;