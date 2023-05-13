import React from 'react';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
        <a className="portfolio__link" target="_blank" href='https://github.com/ShevchenkoEkaterina/how-to-learn'>
          <p className="portfolio__link_github">Статичный сайт</p>
          <img className="portfolio__link_arrow" alt="arrow" src={arrow}/>
        </a>
      <div className="portfolio__line"></div>
      <a className="portfolio__link" target="_blank" href='https://github.com/ShevchenkoEkaterina/Travel-around-Russia---third-project'>
          <p className="portfolio__link_github">Адаптивный сайт</p>
          <img className="portfolio__link_arrow" alt="arrow" src={arrow}/>
        </a>
      <div className="portfolio__line"></div>
      <a className="portfolio__link" target="_blank" href='https://github.com/ShevchenkoEkaterina/express-mesto-gha'>
          <p className="portfolio__link_github" >Одностраничное приложение</p>
          <img className="portfolio__link_arrow" alt="arrow" src={arrow}/>
        </a>
    </div>
  );
}

export default Portfolio;