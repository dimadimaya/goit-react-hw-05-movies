import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import styles from './MovieDetails.module.css';

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
    return;
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
    <div className={styles.movie__container}>
      <Link to={backLinkHref} className={styles.back}>
        BACK
      </Link>

      <div className={styles.movie__wrap}>
        <div className={styles.movie__img}>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title ? title : name}
            />
          ) : (
            <img
              src={
                'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png'
              }
              alt={title ? title : name}
              width="300"
              height="450"
            />
          )}
        </div>
        <div className={styles.movie__info}>
          <h3>
            {title}({new Date(release_date).getFullYear()})
          </h3>
          <h3>Use Score: </h3>
          <p>{Math.round((vote_average / 10) * 100)}%</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          <p>{genres ? genres.map(genre => genre.name).join(', ') : '-'}</p>
        </div>
      </div>
      <div className={styles.movie__add__info}>
        <h2 className={styles.movie__add__info_title}>
          Additional information
        </h2>
        <NavLink to="cast" state={location.state} className={styles.navLink}>
          CAST
        </NavLink>
        <NavLink to="reviews" state={location.state} className={styles.navLink}>
          Reviews
        </NavLink>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
