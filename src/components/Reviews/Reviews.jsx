import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(message => console.log(message));
  }, [movieId]);

  if (reviews.length === 0) {
    return <h3>We don't have any reviews for this movie</h3>;
  }

  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>{author}:</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
