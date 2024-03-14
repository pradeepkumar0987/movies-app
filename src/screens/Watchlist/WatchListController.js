import {useNavigation} from '@react-navigation/native';
import WatchListView from './WatchListView';
import {useCallback, useEffect, useState} from 'react';
import {RootState} from '../../redux/reducers';
import {useSelector} from 'react-redux';
import {getStorageData} from '../../helper/services';

const WatchListController = () => {
  const navigation = useNavigation();
  const [watchListData, setWatchListData] = useState([]);

  const watchList = useSelector(
    (state: RootState) => state?.movies?.addWatchListMoviesRes,
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = useCallback(async () => {
    const data = await getStorageData('watchList');
    setWatchListData(data);
  }, []);

  const onMoviePressed = useCallback(
    item => {
      navigation.navigate('MovieDetail', {data: item});
    },
    [navigation],
  );

  console.log(watchListData);

  return (
    <WatchListView
      watchListMovie={watchListData}
      onMoviePressed={onMoviePressed}
    />
  );
};

export default WatchListController;
