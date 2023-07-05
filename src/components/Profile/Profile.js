import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import CurrentUserContext  from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../useForm/useForm';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues, errors, isValid} = useFormWithValidation();

 useEffect(() => {
  setValues({
    name: currentUser.name,
    email: currentUser.email,
  });
}, [currentUser.name, currentUser.email, setValues]);
  

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({ name: values["name"], email: values["email"] });;
  } 

  return(
    <div className="profile">
      <Header />
      <p className="profile__welcome">Привет, {currentUser.name}!</p>
      <form onSubmit={handleSubmit} className="profile__form">
      <label htmlFor="name" className="profile__input">Имя
          <input 
            required 
            id="name" 
            name="name" 
            className="profile__input-text" 
            type="text" 
            value={values["name"] || ""}
            minLength={2}
            maxLength={30}
            pattern="^[A-Za-zА-Яа-яЁё -]+$"
            onChange={handleChange} />
          {errors["name"] && <span className="profile__error">{errors["name"]}</span>}
        </label>
        <div className="profile__line"></div>
        <label htmlFor="email" className="profile__input">E-mail
          <input 
            required 
            id="email" 
            name="email" 
            className="profile__input-text" 
            type="email" 
            value={values["email"] || ""}
            onChange={handleChange} />
          {errors["email"] && <span className="profile__error">{errors["email"]}</span>}
        </label>
          <button type="submit" disabled={!isValid} className="profile__button">Редактировать</button>
      </form>
      <button onClick={props.handleSubmitSignOut} className="profile__link">Выйти из аккаунта</button>
    </div>
    )
  }

export default Profile;