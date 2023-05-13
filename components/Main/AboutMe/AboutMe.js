import React from 'react';
import photo from '../../../images/photo.png';

function AboutMe() {
return (
    <div className="aboutMe">
      <h2 className="aboutMe__header">Студент</h2>
      <div className="aboutMe__informationAndPhoto">
        <div className="aboutMe__information">
          <h3 className="aboutMe__information_name">Екатерина</h3> 
          <p className="aboutMe__information_mainDescription">Фронтенд-разработчик, 26 лет</p>
          <p className="aboutMe__information_description">Я родилась в Севастополе, уже 9 лет живу в Москве.</p>
          <a className="aboutMe__information_github" href='https://github.com/ShevchenkoEkaterina'>Github</a>
        </div>
        <img className="aboutMe__photo" src={photo} alt="Me"/>
      </div>
    </div>
  );
}

export default AboutMe;