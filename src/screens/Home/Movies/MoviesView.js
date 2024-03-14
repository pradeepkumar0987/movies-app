import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './styles';
import Carousel from 'react-native-reanimated-carousel';
import dimensions from '../../../constants/dimensions';
import {Movies1990} from '../../../constants/data/Movies1990';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MoviesListController from '../../../components/homeMoviesList/MoviesListController';

const MoviesView = ({
  onActionPressMovie,
  onComedyPressMovie,
  moviesNow,
  moviePopular,
  movieTopRated,
  userDate,
}) => {
  const {colors} = useTheme();
  const style = makeStyles(colors);
  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Image
            style={{width: 80, height: 50}}
            source={require('../../../../assets/Images/movies-app-icon.png')}
          />
          <Text style={{color: 'white', fontSize: 24}}>
            {userDate?.login ? `Hello ${userDate?.username}` : 'Hello'}
          </Text>
        </View>
        <AntDesign name={'search1'} size={24} colors={colors.white} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Carousel
            loop={true}
            width={dimensions.WIDTH}
            height={dimensions.HEIGHT / 1.4}
            autoPlay={true}
            data={moviesNow}
            scrollAnimationDuration={1000}
            // onSnapToItem={index => console.log('current index:', index)}
            renderItem={({item, index}) => (
              <View
                style={{
                  flex: 1,
                }}>
                <Image
                  style={{
                    width: dimensions.WIDTH,
                    height: dimensions.HEIGHT,
                  }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
                  }}
                  resizeMode={'cover'}
                />
              </View>
            )}
          />
          <View style={{flex: 1, marginTop: 10}}>
            <View>
              <Text
                style={[
                  style.headingText,
                  {textAlign: 'left', alignSelf: 'flex-start'},
                ]}>
                Now Playing
              </Text>
              <FlatList
                style={{marginTop: 10}}
                horizontal={true}
                data={moviesNow}
                renderItem={({item, index}) => {
                  return (
                    <MoviesListController
                      item={item}
                      index={index}
                      onPressMovie={() => {
                        onActionPressMovie(item);
                      }}
                    />
                  );
                }}
              />
            </View>

            <View>
              <Text
                style={[
                  style.headingText,
                  {textAlign: 'left', alignSelf: 'flex-start'},
                ]}>
                Popular
              </Text>
              <FlatList
                style={{marginTop: 10}}
                horizontal={true}
                data={moviePopular}
                renderItem={({item, index}) => {
                  return (
                    <MoviesListController
                      item={item}
                      index={index}
                      onPressMovie={() => {
                        onComedyPressMovie(item);
                      }}
                    />
                  );
                }}
              />
            </View>

            <View>
              <Text
                style={[
                  style.headingText,
                  {textAlign: 'left', alignSelf: 'flex-start'},
                ]}>
                Top Rated
              </Text>
              <FlatList
                style={{marginTop: 10}}
                horizontal={true}
                data={movieTopRated}
                renderItem={({item, index}) => {
                  return (
                    <MoviesListController
                      item={item}
                      index={index}
                      onPressMovie={() => {
                        onComedyPressMovie(item);
                      }}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MoviesView;
