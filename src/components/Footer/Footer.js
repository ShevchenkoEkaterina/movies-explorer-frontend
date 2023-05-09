import React from 'react';

function Footer() {

  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <h2 className="footer__header">Учебный проект Яндекс.Практикум х BestFilm.</h2>
      <div className="footer__info">
        <p className="footer__info_copyright">&copy; {currentYear}</p>
        <div className="footer__info_links">
          <a className="footer__info_link" href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
          <a className="footer__info_link" href='https://github.com/ShevchenkoEkaterina/movies-explorer-frontend'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;