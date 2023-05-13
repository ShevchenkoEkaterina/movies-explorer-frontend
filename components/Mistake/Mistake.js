import React from 'react';

function Mistake() {

  return(
    <div className="mistake">
      <div className="mistake__description">
        <div className="mistake__code">404</div>
        <div className="mistake__message">Страница не найдена</div>
      </div>
      <p className="mistake__link">Назад</p>
    </div>
    )
  }

export default Mistake;