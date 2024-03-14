import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './style';
import CommonTextInputFieldView from '../../../components/commonTextInputField/CommonTextInputFieldView';
import SearchMoviesController from '../../../components/searchMoviesList/SearchMoviesController';

const MovieSearchView = ({
  searchText,
  searchTextChange,
  searchMovie,
  onMoviePressed,
  searchLoading,
}) => {
  const {colors} = useTheme();
  const style = makeStyles(colors);
  return (
    <View style={style.container}>
      <CommonTextInputFieldView
        placeholder={'Search for a movie'}
        placeholderTextColor={colors.gray500}
        value={searchText}
        onChangeText={searchTextChange}
        paddingStart={10}
        width={'100%'}
      />
      {searchMovie?.length > 0 ? (
        <View style={{flex: 1}}>
          {/* {!searchLoading ? ( */}
          <FlatList
            data={searchMovie}
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
          {/* ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={'large'} color={colors.primary} />
            </View>
          )} */}
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={style.headingText}>No Result Found</Text>
        </View>
      )}
    </View>
  );
};

export default MovieSearchView;
