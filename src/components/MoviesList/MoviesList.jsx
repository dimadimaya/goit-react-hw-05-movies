import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies &&
          movies.map(({ id, name, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="150"
                  height="200"
                />
                <span>{name || title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
