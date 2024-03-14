import SearchMoviesView from './SearchMoviesView';

const SearchMoviesController = ({item, index, onMoviePressed}) => {
  return (
    <SearchMoviesView
      item={item}
      index={index}
      onMoviePressed={onMoviePressed}
    />
  );
};

export default SearchMoviesController;
