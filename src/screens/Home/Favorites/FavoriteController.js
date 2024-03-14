import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import FavoriteView from './FavoriteView';
import {RootState} from '../../../redux/reducers';
import {useSelector} from 'react-redux';
import {getStorageData} from '../../../helper/services';

const FavoriteController = () => {
  const navigation = useNavigation();
  const [favoriteVMovie, setFavoriteVMovie] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = useCallback(async () => {
    const data = await getStorageData('favorites');
    setFavoriteVMovie(data);
  }, []);

  const onMoviePressed = item => {
    navigation.navigate('MovieDetail', {data: item});
  };

  return (
    <FavoriteView
      favoriteVMovie={favoriteVMovie}
      onMoviePressed={onMoviePressed}
    />
  );
};

export default FavoriteController;
