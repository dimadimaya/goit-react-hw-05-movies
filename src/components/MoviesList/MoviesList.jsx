import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={styles.list}>
        {movies &&
          movies.map(({ id, name, title, poster_path }) => (
            <li key={id} className={styles.item}>
              <Link to={`/movies/${id}`} state={{ location }}>
                {poster_path ? (
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    width="150"
                    height="200"
                  />
                ) : (
                  <img
                    className={styles.img}
                    src={
                      'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png'
                    }
                    alt={name}
                    width="140"
                    height="175"
                  />
                )}
                <p>{name ? name : title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

MoviesList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
