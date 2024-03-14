import MoviesListView from './MoviesListView';

const MoviesListController = ({item, index, onPressViewAll, onPressMovie}) => {
  return (
    <MoviesListView
      item={item}
      index={index}
      onPressViewAll={onPressViewAll}
      onPressMovie={onPressMovie}
    />
  );
};

export default MoviesListController;
