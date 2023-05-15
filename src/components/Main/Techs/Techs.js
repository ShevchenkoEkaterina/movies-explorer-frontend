import React from 'react';

function Techs() {
return (
    <div className="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__information">7 технологий</h3> 
      <p className="techs__information_description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="namesOfTechs">
        <p className="namesOfTechs__name">HTML</p>
        <p className="namesOfTechs__name">CSS</p>
        <p className="namesOfTechs__name">JS</p>
        <p className="namesOfTechs__name">React</p>
        <p className="namesOfTechs__name">Git</p>
        <p className="namesOfTechs__name">Express.js</p>
        <p className="namesOfTechs__name">mongoDB</p>
      </div>
    </div>
  );
}

export default Techs;