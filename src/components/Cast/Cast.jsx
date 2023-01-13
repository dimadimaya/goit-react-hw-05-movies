import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(message => console.log(message));
  }, [movieId]);
  // if (cast.length === 0) {
  //   return <h3>We don't have any casts for this movie</h3>;
  // }
  return (
    <ul>
      {cast &&
        cast.map(({ character, profile_path, name, id }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="140"
                height="175"
              />
            ) : (
              <img alt={name} width="140" height="175" />
            )}
            <div>
              <h3>{name}</h3>
              <h4>Character: </h4>
              <p>{character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
