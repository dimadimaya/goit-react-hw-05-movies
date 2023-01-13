export function getTrending() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=8a95c8805d5f43b82cb5bfd70a3069b5`
  ).then(response =>
    response.json().then(data => {
      return data.results;
    })
  );
}

export function searchMovie(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(response =>
    response.json().then(data => {
      return data.results;
    })
  );
}

export function getMovieDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US`
  ).then(response =>
    response.json().then(data => {
      return data;
    })
  );
}

export function getMovieCredits(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US`
  ).then(response =>
    response.json().then(data => {
      return data.cast;
    })
  );
}

export function getMovieReviews(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US&page=1`
  ).then(response =>
    response.json().then(data => {
      return data.results;
    })
  );
}
