import React from 'react';
import {
  StatusBar,
  View,
  Platform,
  StyleSheet,
  NativeModules,
  SafeAreaView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import LoginController from '../screens/Authentication/Login/LoginController';
import RegisterController from '../screens/Authentication/Register/RegisterController';
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';
import MovieDetailsController from '../screens/MovieDetails/MovieDetailsController';
import LogoutModalController from '../screens/Logout/LogoutModalController';

const {StatusBarManager} = NativeModules;

const Stack = createNativeStackNavigator();

function Application() {
  const {colors} = useTheme();

  const MyStatusBar = ({backgroundColor, ...props}) => (
    <SafeAreaView style={[{backgroundColor}]}>
      <View>
        <StatusBar
          backgroundColor={backgroundColor}
          {...props}
          barStyle="light-content"
          animated={true}
        />
      </View>
    </SafeAreaView>
  );

  return (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={colors.darkGray} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            navigationBarColor: colors.darkGray,
            headerShown: false,
          }}>
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
          <Stack.Screen name="Login" component={LoginController} />
          <Stack.Screen name="Signup" component={RegisterController} />
          <Stack.Screen name="MovieDetail" component={MovieDetailsController} />
          <Stack.Screen
            name="LogoutModal"
            component={LogoutModalController}
            options={{
              presentation: 'transparentModal',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <LoaderController loading={loading} /> */}
      <FlashMessage
        duration={2500}
        position="top"
        floating={true}
        animated={true}
        autoHide={true}
      />
    </View>
  );
}

export default Application;
