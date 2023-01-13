import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    getTrending().then(data => setTrendMovies(data));
  }, []);

  if (!trendMovies) {
    return <p>404 Not Found</p>;
  }
  return (
    <>
      <h1>Tranding Today</h1>
      <MoviesList movies={trendMovies} />
    </>
  );
};

export default Home;
