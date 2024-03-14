export const GET_MOVIES_LIST_REQ = 'GET_MOVIES_LIST_REQ';
export const GET_MOVIES_LIST_RES = 'GET_MOVIES_LIST_RES';
export const GET_MOVIES_LIST_FAIL = 'GET_MOVIES_LIST_FAIL';

export const getMoviesRequest = (navigation: any) => ({
  type: GET_MOVIES_LIST_REQ,
  navigation,
});

export const getMoviesSuccess = (payload: any) => ({
  type: GET_MOVIES_LIST_RES,
  payload,
});

export const getMoviesFailure = (request: any) => ({
  type: GET_MOVIES_LIST_FAIL,
  request,
});

export const GET_MOVIES_POPULAR_REQ = 'GET_MOVIES_POPULAR_REQ';
export const GET_MOVIES_POPULAR_RES = 'GET_MOVIES_POPULAR_RES';
export const GET_MOVIES_POPULAR_FAIL = 'GET_MOVIES_POPULAR_FAIL';

export const getMoviesPopularRequest = (navigation: any) => ({
  type: GET_MOVIES_POPULAR_REQ,
  navigation,
});

export const getMoviesPopularSuccess = (payload: any) => ({
  type: GET_MOVIES_POPULAR_RES,
  payload,
});

export const getMoviesPopularFailure = (request: any) => ({
  type: GET_MOVIES_POPULAR_FAIL,
  request,
});

export const GET_MOVIES_TOP_RATED_REQ = 'GET_MOVIES_TOP_RATED_REQ';
export const GET_MOVIES_TOP_RATED_RES = 'GET_MOVIES_TOP_RATED_RES';
export const GET_MOVIES_TOP_RATED_FAIL = 'GET_MOVIES_TOP_RATED_FAIL';

export const getMoviesTopRatesRequest = (navigation: any) => ({
  type: GET_MOVIES_TOP_RATED_REQ,
  navigation,
});

export const getMoviesTopRatesSuccess = (payload: any) => ({
  type: GET_MOVIES_TOP_RATED_RES,
  payload,
});

export const getMoviesTopRatesFailure = (request: any) => ({
  type: GET_MOVIES_TOP_RATED_FAIL,
  request,
});

export const GET_GENRE_REQ = 'GET_GENRE_REQ';
export const GET_GENRE_RES = 'GET_GENRE_RES';
export const GET_GENRE_FAIL = 'GET_GENRE_FAIL';

export const getGenreRequest = (navigation: any) => ({
  type: GET_GENRE_REQ,
  navigation,
});

export const getGenreSuccess = (payload: any) => ({
  type: GET_GENRE_RES,
  payload,
});

export const getGenreFailure = (request: any) => ({
  type: GET_GENRE_FAIL,
  request,
});

export const SEARCH_MOVIE_REQ = 'SEARCH_MOVIE_REQ';
export const SEARCH_MOVIE_RES = 'SEARCH_MOVIE_RES';
export const SEARCH_MOVIE_FAIL = 'SEARCH_MOVIE_FAIL';

export const searchMoviesRequest = (payload: any, navigation: any) => ({
  type: SEARCH_MOVIE_REQ,
  payload,
  navigation,
});

export const searchMoviesSuccess = (payload: any) => ({
  type: SEARCH_MOVIE_RES,
  payload,
});

export const searchMoviesFailure = (request: any) => ({
  type: SEARCH_MOVIE_FAIL,
  request,
});

export const ADD_MOVIE_FAVORITE_REQ = 'ADD_MOVIE_FAVORITE_REQ';
export const REMOVE_MOVIE_FAVORITE_REQ = 'REMOVIE_MOVIE_FAVORITE_REQ';
export const GET_MOVIE_FAVORITE_REQ = 'GET_MOVIE_FAVORITE_REQ';

export const addMovieFavoriteRequest = (payload: any, navigation: any) => ({
  type: ADD_MOVIE_FAVORITE_REQ,
  payload,
  navigation,
});

export const removeMovieFavoriteRequest = (payload: any, navigation: any) => ({
  type: REMOVE_MOVIE_FAVORITE_REQ,
  payload,
  navigation,
});

export const getMovieFavoriteRequest = (payload: any) => ({
  type: GET_MOVIE_FAVORITE_REQ,
  payload,
});

export const ADD_WATCH_LIST_MOVIE_REQ = 'ADD_WATCH_LIST_MOVIE_REQ';
export const ADD_WATCH_LIST_MOVIE_RES = 'ADD_WATCH_LIST_MOVIE_RES';

export const addWatchListMoviesRequest = (payload: any, navigation: any) => ({
  type: ADD_WATCH_LIST_MOVIE_REQ,
  payload,
  navigation,
});

export const addWatchListMoviesSuccess = (payload: any) => ({
  type: ADD_WATCH_LIST_MOVIE_RES,
  payload,
});

export const REMOVE_WATCH_LIST_MOVIE_REQ = 'REMOVE_WATCH_LIST_MOVIE_REQ';
export const REMOVE_WATCH_LIST_MOVIE_RES = 'REMOVE_WATCH_LIST_MOVIE_RES';

export const removeWatchListMoviesRequest = (
  payload: any,
  navigation: any,
) => ({
  type: REMOVE_WATCH_LIST_MOVIE_REQ,
  payload,
  navigation,
});

export const removeWatchListMoviesSuccess = (payload: any) => ({
  type: REMOVE_WATCH_LIST_MOVIE_RES,
  payload,
});

export const GET_WATCH_LIST_MOVIE_REQ = 'GET_WATCH_LIST_MOVIE_REQ';
export const GET_WATCH_LIST_MOVIE_RES = 'GET_WATCH_LIST_MOVIE_RES';

export const getWatchListMoviesRequest = () => ({
  type: GET_WATCH_LIST_MOVIE_REQ,
});

export const getWatchListMoviesSuccess = (payload: any) => ({
  type: GET_WATCH_LIST_MOVIE_RES,
  payload,
});
