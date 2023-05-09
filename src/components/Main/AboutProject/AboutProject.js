import React from 'react';

function AboutProject() {
return (
    <div className="aboutProject" id="aboutProject">
        <h2 className="aboutProject__header">О проекте</h2>
        <div className="aboutProject__allinformation_about">
        <div>
          <h3 className="aboutProject__information">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__information_description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className="aboutProject__information">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__information_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        </div>
        <div className="aboutProject__allinformation_time">
          <div>
            <p className="aboutProject__duration_1">1 неделя</p>
            <p className="aboutProject__duration_description_1">Back-end</p>
          </div>
          <div>
            <p className="aboutProject__duration_2">4 недели</p>
            <p className="aboutProject__duration_description_2">Front-end</p>
          </div>
        </div>
    </div>
  );
}

export default AboutProject;