import {all} from 'redux-saga/effects';
import authSaga from './auth';
import moviesSaga from './getMovies';

function* rootSaga() {
  yield all([authSaga(), moviesSaga()]);
}

export default rootSaga;
