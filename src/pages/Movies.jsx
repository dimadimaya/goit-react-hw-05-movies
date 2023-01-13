import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    searchMovie(searchParams.get('query')).then(data => {
      setMovies(data);
    });
  }, [searchParams, query]);

  console.log(movies);
  return (
    <>
      <h1>Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query here, please"
          onChange={handlerInput}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};
export default Movies;
