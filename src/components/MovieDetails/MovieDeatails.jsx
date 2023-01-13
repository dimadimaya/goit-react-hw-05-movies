import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.location ?? '/';

  useEffect(() => {
    getMovieDetails(Number(movieId))
      .then(setMovie)
      .catch(messsage => console.log(messsage));
  }, [movieId]);

  if (!movie) {
    return <p>404 Not Found</p>;
  }

  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <>
      {movie && (
        <div>
          <Link to={backLinkHref}>BACK</Link>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={name || title}
          />
          <h3>
            {title}({new Date(release_date).getFullYear()})
          </h3>
          {<p>Use Score: {Math.round((vote_average / 10) * 100)}%</p>}
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
        </div>
      )}
      <Link to="cast" state={location.state}>
        CAST
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
