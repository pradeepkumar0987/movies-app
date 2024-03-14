import {AxiosResponse} from 'axios';
import {API_KEY, EndPoint} from '../endpoints';
import Interceptor from '../requests/interceptors';
import {startLoaderSaga, stopLoaderSaga} from './loader';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  ADD_MOVIE_FAVORITE_REQ,
  ADD_WATCH_LIST_MOVIE_REQ,
  GET_GENRE_REQ,
  GET_MOVIES_LIST_REQ,
  GET_MOVIES_POPULAR_REQ,
  GET_MOVIES_TOP_RATED_REQ,
  GET_WATCH_LIST_MOVIE_REQ,
  REMOVE_MOVIE_FAVORITE_REQ,
  REMOVE_WATCH_LIST_MOVIE_REQ,
  SEARCH_MOVIE_REQ,
  addMovieFavoriteRequest,
  addWatchListMoviesSuccess,
  getGenreFailure,
  getGenreSuccess,
  getMoviesFailure,
  getMoviesPopularFailure,
  getMoviesPopularSuccess,
  getMoviesSuccess,
  getMoviesTopRatesFailure,
  getMoviesTopRatesSuccess,
  getWatchListMoviesSuccess,
  removeMovieFavoriteRequest,
  removeWatchListMoviesSuccess,
  searchMoviesFailure,
  searchMoviesSuccess,
} from '../actions/getMoviesAction';

function* getMoviesRequestSaga({navigation}: any) {
  try {
    yield startLoaderSaga();

    const response: AxiosResponse = yield call(
      Interceptor.get,
      `${EndPoint.discover}?api_key=${API_KEY}`,
    );

    if (response) {
      yield put(getMoviesSuccess(response));
    } else {
      yield put(getMoviesFailure(response));
    }
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
    yield put(getMoviesFailure(error));
  }
}

function* getMoviesPopularRequestSaga({navigation}: any) {
  try {
    yield startLoaderSaga();

    const response: AxiosResponse = yield call(
      Interceptor.get,
      `${EndPoint.popular}?api_key=${API_KEY}`,
    );

    if (response) {
      yield put(getMoviesPopularSuccess(response));
    } else {
      yield put(getMoviesPopularFailure(response));
    }
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
    yield put(getMoviesPopularFailure(error));
  }
}

function* getMoviesTopRatedRequestSaga({navigation}: any) {
  try {
    yield startLoaderSaga();

    const response: AxiosResponse = yield call(
      Interceptor.get,
      `${EndPoint.top_rated}?api_key=${API_KEY}`,
    );

    if (response) {
      yield put(getMoviesTopRatesSuccess(response));
    } else {
      yield put(getMoviesTopRatesFailure(response));
    }
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
    yield put(getMoviesTopRatesFailure(error));
  }
}

function* getGenreRequestSaga({navigation}: any) {
  try {
    yield startLoaderSaga();

    const response: AxiosResponse = yield call(
      Interceptor.get,
      `${EndPoint.genre}?api_key=${API_KEY}`,
    );

    if (response) {
      yield put(getGenreSuccess(response));
    } else {
      yield put(getGenreFailure(response));
    }
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
    yield put(getGenreFailure(error));
  }
}

type Params = {payload: any; navigation: any};
function* searchMoviesRequestSaga({payload, navigation}: Params) {
  try {
    const response: AxiosResponse = yield call(
      Interceptor.get,
      `${EndPoint.search}?api_key=${API_KEY}&query=${payload}`,
    );

    if (response) {
      yield put(searchMoviesSuccess(response));
    } else {
      yield put(searchMoviesFailure(response));
    }
  } catch (error) {
    yield put(searchMoviesFailure(error));
  }
}

function* addMovieFavoriteRequestSaga({payload}: any, {navigation}: any) {
  try {
    yield startLoaderSaga();
    yield put(addMovieFavoriteRequest(payload, navigation));
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
  }
}

function* addWatchListMovieRequestSaga({payload}: any, {navigation}: any) {
  try {
    yield startLoaderSaga();
    yield put(addWatchListMoviesSuccess(payload));
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
  }
}

function* removeWatchListMovieRequestSaga({payload}: any, {navigation}: any) {
  try {
    yield startLoaderSaga();
    yield put(removeWatchListMoviesSuccess(payload));
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
  }
}

function* getWatchListMovieRequestSaga({payload}: any, {navigation}: any) {
  try {
    yield startLoaderSaga();
    yield put(getWatchListMoviesSuccess(payload));
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
  }
}

function* removeMovieFavoriteRequestSaga({payload}: any, {navigation}: any) {
  try {
    yield startLoaderSaga();
    yield put(removeMovieFavoriteRequest(payload, navigation));
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
  }
}

function* getFavoriteMovieRequestSaga({navigation}: any) {
  try {
    yield startLoaderSaga();
    yield put(getGenreFailure(response));
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
  }
}

function* moviesSaga() {
  yield takeLatest(GET_MOVIES_LIST_REQ, getMoviesRequestSaga);
  yield takeLatest(GET_MOVIES_POPULAR_REQ, getMoviesPopularRequestSaga);
  yield takeLatest(GET_MOVIES_TOP_RATED_REQ, getMoviesTopRatedRequestSaga);
  yield takeLatest(GET_GENRE_REQ, getGenreRequestSaga);
  yield takeLatest(SEARCH_MOVIE_REQ, searchMoviesRequestSaga);
  yield takeLatest(ADD_WATCH_LIST_MOVIE_REQ, addWatchListMovieRequestSaga);
  yield takeLatest(
    REMOVE_WATCH_LIST_MOVIE_REQ,
    removeWatchListMovieRequestSaga,
  );
  yield takeLatest(GET_WATCH_LIST_MOVIE_REQ, getWatchListMovieRequestSaga);
}

export default moviesSaga;
