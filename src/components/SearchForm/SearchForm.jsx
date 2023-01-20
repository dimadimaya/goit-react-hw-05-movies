import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleInput = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie(query).then(data => {
      setMovies(data);
    });
  }, [searchParams, query]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your query here, please"
          onChange={handleInput}
          value={searchQuery}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};
