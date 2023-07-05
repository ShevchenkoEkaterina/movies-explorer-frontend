class MoviesApi {
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
  
    getInitialMovies() {
      return fetch(`${this._baseUrl}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
        .then(this._checkwork);
    }

};

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;