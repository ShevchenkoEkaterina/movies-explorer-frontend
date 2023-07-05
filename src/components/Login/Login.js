import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Register from '../Register/Register';
import useFormWithValidation from '../useForm/useForm';

function Login({handleSubmitSignIn}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.password || !values.email) {
      return;
    }
    const { email, password,  } = values;
    handleSubmitSignIn( email, password )
  }

  return(
    <div className="login">
    <img className="login__logo" src={logo} alt="Логотип"/>
      <p className="login__welcome">Рады видеть!</p>
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email" className="login__input">E-mail
          <input 
            required 
            id="email" 
            name="email" 
            className="login__input-text" 
            type="email"
            value={values["email"]}
            onChange={handleChange }/>
          {errors["email"] && <span className="login__error">{errors["email"]}</span>}
        </label>
        <label htmlFor="password" className="login__input">Пароль
          <input 
            required 
            id="password" 
            name="password" 
            className="login__input-text" 
            type="password"
            value={values["password"]}
            onChange={handleChange}/>
          {errors["password"] && <span className="login__error">{errors["password"]}</span>}
        </label>
          <button type="submit" disabled={!isValid} onSubmit={handleSubmit} className="login__button">Войти</button>
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