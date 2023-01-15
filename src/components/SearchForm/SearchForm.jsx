import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const handleInput = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (!name) {
      return;
    }
    searchMovie(name).then(data => {
      setMovies(data);
    });
  }, [searchParams, name]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ name: query });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your query here, please"
          onChange={handleInput}
          value={query}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};
