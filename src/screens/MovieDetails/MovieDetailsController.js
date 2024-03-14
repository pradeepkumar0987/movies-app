import {useNavigation, useRoute} from '@react-navigation/native';
import MovieDetailsView from './MovieDetailsView';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {useCallback, useEffect, useState} from 'react';
import {
  ADD_MOVIE_FAVORITE_REQ,
  REMOVE_MOVIE_FAVORITE_REQ,
  addMovieFavoriteRequest,
  addWatchListMoviesRequest,
  removeMovieFavoriteRequest,
  removeWatchListMoviesRequest,
} from '../../redux/actions/getMoviesAction';
import {getStorageData, storeStorageDate} from '../../helper/services';

const MovieDetailsController = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const movieDetail = route?.params?.data;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const [watchList, setWatchList] = useState(false);
  const [watchListArr, setWatchListArr] = useState([]);
  const [rating, setRating] = useState(0);
  const [userDate, setUserData] = useState({});

  const {genres, favoriteMovies} = useSelector((state: RootState) => ({
    genres: state.movies?.getGenreRes,
    favoriteMovies: state?.movies?.addRemoveMovieFavoriteRes,
  }));

  useEffect(() => {
    getData();
    if (movieDetail) {
      const movieRating = movieDetail?.vote_average / 2;
      setRating(movieRating);
    }
  }, []); // empty dependency array to run the effect only once

  const getData = useCallback(async () => {
    const userDatas = await getStorageData('profile');
    setUserData(userDatas);
    const watchListDatas = await getStorageData('watchList');
    setWatchListArr(watchListDatas);
    const watchListArrexists = watchListDatas.some(obj =>
      compareObjects(obj, movieDetail),
    );
    setWatchList(watchListArrexists);
    const FavoritesData = await getStorageData('favorites');
    setFavoriteList(FavoritesData);
    if (FavoritesData?.length > 0) {
      const FavoritesArrexists = FavoritesData.some(obj =>
        compareObjects(obj, movieDetail),
      );
      setFavorite(FavoritesArrexists);
    } else {
      const FavoritesData = await getStorageData('favorites');
      setFavoriteList(FavoritesData);
    }
  }, []);

  // Function to compare two objects
  const compareObjects = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  // Function to check two objects
  const checkObjects = (obj1, obj2) => {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
  };

  const getGenreName = id => {
    const genre = genres?.genres.find(genre => genre.id === id);
    return genre ? genre.name : 'Unknown';
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onAddToFavoritesPressed = detail => {
    if (favorite) {
      const filteredData = favoriteList.filter(item =>
        checkObjects(item, detail),
      );
      setFavoriteList(filteredData);
      storeStorageDate('favorites', filteredData);
      setFavorite(false);
    } else {
      if (favoriteList?.length > 0) {
        const updatedData = [...favoriteList, detail];
        setFavoriteList(updatedData);
        storeStorageDate('favorites', updatedData);
        setFavorite(true);
      } else {
        const updatedData = [detail];
        setFavoriteList(updatedData);
        storeStorageDate('favorites', updatedData);
        setFavorite(true);
      }
    }
  };

  const onAddToWatchListPressed = detail => {
    if (watchList) {
      const filteredData = watchListArr.filter(item =>
        checkObjects(item, detail),
      );
      setWatchListArr(filteredData);
      storeStorageData('watchList', filteredData);
      setWatchList(false);
    } else {
      if (watchListArr?.length > 0) {
        const updatedData = [...watchListArr, detail];
        setWatchListArr(updatedData);
        storeStorageDate('watchList', updatedData);
        setWatchList(true);
      } else {
        const updatedData = [detail];
        setWatchListArr(updatedData);
        storeStorageDate('watchList', updatedData);
        setWatchList(true);
      }
    }
  };

  return (
    <MovieDetailsView
      movieDetail={movieDetail}
      onPressBack={onPressBack}
      getGenreName={getGenreName}
      favorite={favorite}
      userDate={userDate}
      onAddToFavoritesPressed={onAddToFavoritesPressed}
      onAddToWatchListPressed={onAddToWatchListPressed}
      watchList={watchList}
      rating={rating}
    />
  );
};

export default MovieDetailsController;
