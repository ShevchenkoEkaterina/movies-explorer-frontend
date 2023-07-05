class MainApi {
    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }

    _checkwork(res){
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    }

    getUserInfo(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
      .then(this._checkwork);
    }

    editUserInfo(name, email) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
      .then(this._checkwork);
    }

    getMovies() {
      return fetch(`${this._address}/movies`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json; charset=utf-8'
        },
      })
      .then(this._checkwork);
    }

    addNewMovie(card) {
      return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          country: card.country,
          director: card.director,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: card.image.url,
          trailerLink: card.trailerLink,
          thumbnail: card.image.url,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          movieId: card.id,
        })
      })
      .then(this._checkwork);
    }

    removeMovie(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
      .then(this._checkwork);
    }

};

const mainApi = new MainApi('https://api.movies.ekatshev4enko.nomoredomains.work');

export default mainApi;