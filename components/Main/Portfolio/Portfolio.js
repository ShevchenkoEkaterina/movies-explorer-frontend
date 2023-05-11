import React from 'react';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
        <div className="portfolio__link">
          <a className="portfolio__link_github" target="_blank" href='https://github.com/ShevchenkoEkaterina/how-to-learn'>Статичный сайт</a>
          <img className="portfolio__link_arrow" alt="arrow" src={arrow} onClick='https://github.com/ShevchenkoEkaterina/how-to-learn'/>
        </div>
      <div className="portfolio__line"></div>
      <div className="portfolio__link">
          <a className="portfolio__link_github" target="_blank" href='https://github.com/ShevchenkoEkaterina/Travel-around-Russia---third-project'>Адаптивный сайт</a>
          <img className="portfolio__link_arrow" alt="arrow" src={arrow} onClick='https://github.com/ShevchenkoEkaterina/Travel-around-Russia---third-project'/>
        </div>
      <div className="portfolio__line"></div>
      <div className="portfolio__link">
          <a className="portfolio__link_github" target="_blank" href='https://github.com/ShevchenkoEkaterina/express-mesto-gha'>Одностраничное приложение</a>
          <img className="portfolio__link_arrow" alt="arrow" src={arrow} onClick='https://github.com/ShevchenkoEkaterina/express-mesto-gha'/>
        </div>
    </div>
  );
}

export default Portfolio;