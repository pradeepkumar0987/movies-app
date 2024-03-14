import {useTheme} from 'react-native-paper';
import makeStyles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import dimensions from '../../constants/dimensions';

const SearchMoviesView = ({item, index, onMoviePressed}) => {
  const {colors} = useTheme();
  const style = makeStyles(colors);

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        onMoviePressed(item);
      }}>
      <View>
        <Image
          style={style.logo}
          source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
        />
      </View>
      <View>
        <Text
          style={[style.headingText, {width: dimensions.WIDTH / 1.5}]}
          numberOfLines={2}>
          {item?.title}
        </Text>
        <Text style={style.extract}>Release Date:- {item?.release_date}</Text>
        <Text
          style={[style.extract, {width: dimensions.WIDTH / 1.5}]}
          numberOfLines={2}>
          {item?.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchMoviesView;
