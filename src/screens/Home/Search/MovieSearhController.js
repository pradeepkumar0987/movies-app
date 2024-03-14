import {useState} from 'react';
import MovieSearchView from './MovieSearchView';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {searchMoviesRequest} from '../../../redux/actions/getMoviesAction';
import {RootState} from '../../../redux/reducers';

const MovieSearhController = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const {searchMovie} = useSelector((state: RootState) => ({
    searchMovie: state.movies?.searchMoviesRes,
  }));

  const searchTextChange = text => {
    setSearchText(text);
    setSearchLoading(true);
    dispatch(searchMoviesRequest(text, navigation));
    setSearchLoading(false);
  };

  const onMoviePressed = item => {
    navigation.navigate('MovieDetail', {data: item});
  };

  return (
    <MovieSearchView
      searchMovie={searchMovie?.results}
      searchText={searchText}
      searchTextChange={searchTextChange}
      onMoviePressed={onMoviePressed}
      searchLoading={searchLoading}
    />
  );
};

export default MovieSearhController;
