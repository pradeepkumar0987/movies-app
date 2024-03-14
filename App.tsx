/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import notifee from '@notifee/react-native';
import SplashScreen from 'react-native-splash-screen';
import theme from './src/styles/theme';
import Application from './src/rounts/Application';
import {persistor, store} from './src/redux/store';

const App = () => {
  useEffect(() => {
    // Location permissions
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  // Notification

  return (
    <SafeAreaView style={{flex: 1}}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={true}>
          <PaperProvider theme={theme}>
            <Application />
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    </SafeAreaView>
  );
};

export default App;
