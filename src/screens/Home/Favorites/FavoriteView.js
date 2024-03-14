import {FlatList, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './style';
import SearchMoviesController from '../../../components/searchMoviesList/SearchMoviesController';

const FavoriteView = ({favoriteVMovie, onMoviePressed}) => {
  const {colors} = useTheme();
  const style = makeStyles(colors);
  return (
    <View style={style.container}>
      {favoriteVMovie?.length > 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            data={favoriteVMovie}
            renderItem={({item, index}) => {
              return (
                <SearchMoviesController
                  item={item}
                  index={index}
                  onMoviePressed={onMoviePressed}
                />
              );
            }}
          />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={style.headingText}>No Movies Added</Text>
        </View>
      )}
    </View>
  );
};

export default FavoriteView;
