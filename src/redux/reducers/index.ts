import storage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import loaderReducer, {LoaderState} from './loaderReducer';
import getMoviesReducer, {MoviesState} from './getMoviesReducer';
import authReducer, {AuthState} from './authReducer';
export interface RootState {
  loader: LoaderState;
  auth: AuthState;
  movies: MoviesState;
}

const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  movies: getMoviesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
