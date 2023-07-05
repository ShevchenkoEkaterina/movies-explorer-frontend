import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Login from '../Login/Login';
import useFormWithValidation from '../useForm/useForm';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    props.handleSubmitRegistration(name, email, password);
  }

  return (
    <div className="register">
      <img className="register__logo" src={logo} alt="Логотип"/>
      <p className="register__welcome">Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="name" className="register__input">Имя
          <input 
            required 
            id="name" 
            name="name" 
            className="register__input-text" 
            type="text"
            value={values["name"]}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            pattern="^[A-Za-zА-Яа-яЁё -]+$"/>
          {errors["name"] && <span className="register__error">{errors["name"]}</span>}  
        </label>
        <label htmlFor="email" className="register__input">E-mail
          <input 
            required 
            id="email" 
            name="email" 
            className="register__input-text" 
            type="email"
            value={values["email"]}
            autoComplete="email" 
            onChange={handleChange}/>
          {errors["email"] && <span className="register__error">{errors["email"]}</span>}
        </label>
        <label htmlFor="password" className="register__input">Пароль
          <input 
            required 
            id="password" 
            name="password" 
            className="register__input-text" 
            type="password"
            autoComplete="new-password" 
            value={values["password"]}
            onChange={handleChange}/>
          {errors["password"] && <span className="register__error">{errors["password"]}</span>}
        </label>
        <button 
          type="submit"
          onSubmit={handleSubmit}
          disabled={!isValid}
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