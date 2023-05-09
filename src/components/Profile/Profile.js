import React, { useState } from 'react';
import Header from '../Header/Header';

function Profile(props) {
  const [userData, setUserData] = useState({name: '', email: ''});

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!userData.name || !userData.email) {
      return;
    }
    const { name, email } = userData;
    props.handleSubmitSignIn(name, email);
  }

  return(
    <div className="profile">
      <Header />
      <p className="profile__welcome">Привет, {userData.name}!</p>
      <form onSubmit={handleSubmit} className="profile__form">
      <label htmlFor="name" className="profile__input">Имя
          <input 
            required 
            id="name" 
            name="name" 
            className="profile__input-text" 
            type="text" 
            value={userData.name} 
            onChange={handleChange} />
        </label>
        <div className="profile__line"></div>
        <label htmlFor="email" className="profile__input">E-mail
          <input 
            required id="email" 
            name="email" 
            className="profile__input-text" 
            type="email" 
            value={userData.email} 
            onChange={handleChange} />
        </label>
          <button type="submit" onSubmit={handleSubmit} className="profile__button">Редактировать</button>
          <p className="profile__link">Выйти из аккаунта</p>
      </form>
    </div>
    )
  }

export default Profile;