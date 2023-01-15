import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(message => console.log(message));
  }, [movieId]);

  return (
    <>
      {cast && cast.length ? (
        <ul className={styles.list}>
          {cast.map(({ character, profile_path, name, id }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="140"
                  height="175"
                />
              ) : (
                <img
                  src={
                    'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg'
                  }
                  alt={name}
                  width="140"
                  height="175"
                />
              )}
              <div>
                <h3>{name}</h3>
                <h4>Character: </h4>
                <p>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don't have any casts for this movie</h3>
      )}
    </>
  );
};

export default Cast;
