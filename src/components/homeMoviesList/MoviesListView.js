import {Image, Text, TouchableOpacity, View} from 'react-native';

const MoviesListView = ({item, index, onPressViewAll, onPressMovie}) => {
  return (
    <TouchableOpacity onPress={onPressMovie} style={{marginHorizontal: 10}}>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'white'}}>Action</Text>
        <Text style={{color: 'white'}}>View All</Text>
      </View> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 150}}
          source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
        />
        <Text style={{color: 'white', width: 100, textAlign: 'center'}}>
          {item?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MoviesListView;
