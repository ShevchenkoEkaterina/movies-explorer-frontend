import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Register from '../Register/Register';

function Login() {

  return(
    <div className="login">
    <img className="login__logo" src={logo} alt="Логотип"/>
      <p className="login__welcome">Рады видеть!</p>
      <form className="login__form">
        <label htmlFor="email" className="login__input">E-mail
          <input 
            required 
            id="email" 
            name="email" 
            className="login__input-text" 
            type="email"/>
        </label>
        <label htmlFor="password" className="login__input">Пароль
          <input 
            required 
            id="password" 
            name="password" 
            className="login__input-text" 
            type="password"/>
        </label>
          <button type="submit" className="login__button">Войти</button>
          <div className="login__registration">
            <p className="register__registration_question">Ещё не зарегистрированы?</p>
            <div className="login__registration_link">
            <Link to="/signup" component={<Register/>}>Регистрация</Link>
            </div>
          </div>
      </form>
    </div>
    )
  }

export default Login;