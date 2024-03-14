import {useNavigation} from '@react-navigation/native';
import MoviesView from './MoviesView';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  getGenreRequest,
  getMoviesPopularRequest,
  getMoviesRequest,
  getMoviesTopRatesRequest,
} from '../../../redux/actions/getMoviesAction';
import {RootState} from '../../../redux/reducers';
import {getStorageData} from '../../../helper/services';

const MoviesController = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userDate, setUserData] = useState({});

  const {moviesNow, moviePopular, movieTopRated} = useSelector(
    (state: RootState) => ({
      moviesNow: state.movies?.getMoviesRes,
      moviePopular: state.movies?.getMoviesPopularRes,
      movieTopRated: state.movies?.getMoviesTopRatedRes,
    }),
  );

  useEffect(() => {
    getData();
    dispatch(getGenreRequest(navigation));
    dispatch(getMoviesRequest(navigation));
    dispatch(getMoviesPopularRequest(navigation));
    dispatch(getMoviesTopRatesRequest(navigation));
  }, []);

  const getData = async () => {
    const data = await getStorageData('profile');
    setUserData(data);
  };

  const onActionPressMovie = item => {
    navigation.navigate('MovieDetail', {data: item});
  };

  const onComedyPressMovie = item => {
    navigation.navigate('MovieDetail', {data: item});
  };
  return (
    <MoviesView
      userDate={userDate}
      moviesNow={moviesNow?.results}
      moviePopular={moviePopular?.results}
      movieTopRated={movieTopRated?.results}
      onActionPressMovie={onActionPressMovie}
      onComedyPressMovie={onComedyPressMovie}
    />
  );
};

export default MoviesController;
