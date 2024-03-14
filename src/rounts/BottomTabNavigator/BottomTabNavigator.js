/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import {FONTS} from '../../styles/theme';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux/reducers';
import MoviesController from '../../screens/Home/Movies/MoviesController';
import ProfileController from '../../screens/Home/Profile/ProfileController';
import {getStorageData} from '../../helper/services';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieSearhController from '../../screens/Home/Search/MovieSearhController';
import LogoutModalController from '../../screens/Logout/LogoutModalController';
import WatchListController from '../../screens/Watchlist/WatchListController';
import FavoriteController from '../../screens/Home/Favorites/FavoriteController';

const BottomTabNavigator = () => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [userDate, setUserData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const data = await getStorageData('profile');
    setUserData(data);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray300,

        tabBarStyle: {
          backgroundColor: colors.darkGray,
          paddingHorizontal: 5,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONTS.BOLD,
          marginTop: 5,
        },
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesController}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <MaterialCommunityIcons
                name={'movie'}
                size={24}
                color={focused ? colors.primary : colors.white}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={MovieSearhController}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <AntDesign
                name={'search1'}
                size={24}
                color={focused ? colors.primary : colors.white}
              />
            );
          },
        }}
      />

      {userDate?.login && (
        <Tab.Screen
          name="Favorites"
          component={FavoriteController}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <AntDesign
                  name={focused ? 'heart' : 'hearto'}
                  size={24}
                  color={focused ? colors.primary : colors.white}
                />
              );
            },
          }}
        />
      )}

      {userDate?.login && (
        <Tab.Screen
          name="Watchlist"
          component={WatchListController}
          options={{
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={focused ? styles.activeImage : styles.image}
                  source={require('../../../assets/Images/watchlist-add.png')}
                />
              );
            },
          }}
        />
      )}

      {!userDate?.login && (
        <Tab.Screen
          name="Profile"
          component={ProfileController}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={focused ? styles.activeImage : styles.image}
                  source={require('../../../assets/Images/icon-profile.png')}
                />
              );
            },
          }}
        />
      )}

      {userDate?.login && (
        <Tab.Screen
          name="Logout"
          listeners={({navigation}) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate('LogoutModal');
            },
          })}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarIcon: ({size, focused, color}) => {
              return (
                <AntDesign
                  name={'logout'}
                  size={20}
                  color={focused ? colors.primary : colors.white}
                />
              );
            },
          }}>
          {() => (
            <Stack.Navigator
              mode="modal"
              screenOptions={{presentation: 'transparentModal'}}>
              <Stack.Screen
                name="Screen2Modal"
                component={LogoutModalController}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      )}
    </Tab.Navigator>
  );
};

const makeStyles = colors =>
  StyleSheet.create({
    image: {
      height: 24,
      width: 24,
      margin: 5,
      tintColor: colors.white,
      resizeMode: 'contain',
    },
    activeImage: {
      height: 24,
      width: 24,
      tintColor: colors.primary,
      resizeMode: 'contain',
    },
  });

export default BottomTabNavigator;
