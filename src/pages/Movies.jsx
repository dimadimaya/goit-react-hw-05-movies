import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesList />
    </>
  );
};
export default Movies;
