import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import makeStyles from './style';
import dimensions from '../../constants/dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';

const MovieDetailsView = ({
  movieDetail,
  onPressBack,
  getGenreName,
  favorite,
  watchList,
  onAddToFavoritesPressed,
  onAddToWatchListPressed,
  userDate,
  rating,
}) => {
  const {colors} = useTheme();
  const style = makeStyles(colors);
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity onPress={onPressBack}>
        <Ionicons name={'arrow-back'} size={24} color={colors.white} />
      </TouchableOpacity>
      <ScrollView
        style={{flex: 1, marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Image
            style={{
              width: dimensions.WIDTH,
              height: dimensions.HEIGHT / 1.3,
              overflow: 'hidden',
            }}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`,
            }}
          />
          {userDate?.login && (
            <View style={style.favAndWatchCont}>
              <TouchableOpacity
                style={style.favoriteContainer}
                onPress={() => {
                  onAddToFavoritesPressed(movieDetail);
                }}>
                <AntDesign
                  name={favorite ? 'heart' : 'hearto'}
                  size={35}
                  color={favorite ? 'red' : colors.black}
                />
              </TouchableOpacity>
              {/* hearto */}
              <TouchableOpacity
                style={style.favoriteContainer}
                onPress={() => {
                  onAddToWatchListPressed(movieDetail);
                }}>
                {watchList ? (
                  <AntDesign name={'check'} size={35} color={colors.primary} />
                ) : (
                  <Ionicons name={'add'} size={35} color={colors.black} />
                )}
              </TouchableOpacity>
            </View>
          )}
          {rating > 0 && (
            <View style={style.ratingContainer}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={rating}
                starSize={45}
                emptyStarColor={colors.golden}
                fullStarColor={colors.golden}
                buttonStyle={{
                  paddingEnd: -20,
                }}
              />
            </View>
          )}
          <View style={{marginTop: 10}}>
            <Text style={style.headingText}>{movieDetail?.title}</Text>

            <Text style={style.extract}>
              Release Date:- {movieDetail?.release_date}
            </Text>
            <View>
              <Text style={style.headingText}>Genres</Text>
              <FlatList
                data={movieDetail?.genre_ids}
                numColumns={4}
                scrollEnabled={false}
                renderItem={({item, index}) => {
                  return (
                    <Text
                      style={[
                        style.extract,
                        {marginHorizontal: 2, marginTop: -5},
                      ]}>
                      {getGenreName(item)}
                    </Text>
                  );
                }}
              />
            </View>
            <Text style={style.extract}>
              Language:- {movieDetail?.original_language}
            </Text>
            <Text style={style.extract}>{movieDetail?.overview}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsView;
