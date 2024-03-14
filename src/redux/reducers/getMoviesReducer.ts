import {
  ADD_MOVIE_FAVORITE_REQ,
  ADD_WATCH_LIST_MOVIE_RES,
  GET_GENRE_FAIL,
  GET_GENRE_RES,
  GET_MOVIES_LIST_FAIL,
  GET_MOVIES_LIST_RES,
  GET_MOVIES_POPULAR_FAIL,
  GET_MOVIES_POPULAR_RES,
  GET_MOVIES_TOP_RATED_FAIL,
  GET_MOVIES_TOP_RATED_RES,
  GET_MOVIE_FAVORITE_REQ,
  GET_WATCH_LIST_MOVIE_RES,
  REMOVE_MOVIE_FAVORITE_REQ,
  REMOVE_WATCH_LIST_MOVIE_RES,
  SEARCH_MOVIE_FAIL,
  SEARCH_MOVIE_RES,
} from '../actions/getMoviesAction';

export interface MoviesState {
  getMoviesRes: any;
  getMoviesErr: string;
  getGenreRes: any;
  getGenreErr: string;
  getMoviesPopularRes: any;
  getMoviesPopularErr: string;
  getMoviesTopRatedRes: any;
  getMoviesTopRatedErr: string;
  addRemoveMovieFavoriteRes: any;
  searchMoviesRes: any;
  searchMoviesErr: string;
  addWatchListMoviesRes: any;
  getWatchListMoviesRes: any;
}

const initialState = {
  getMoviesRes: '',
  getMoviesErr: '',
  getGenreRes: '',
  getGenreErr: '',
  getMoviesPopularRes: '',
  getMoviesPopularErr: '',
  getMoviesTopRatedRes: '',
  getMoviesTopRatedErr: '',
  addRemoveMovieFavoriteRes: [],
  searchMoviesRes: '',
  searchMoviesErr: '',
  addWatchListMoviesRes: [],
  getWatchListMoviesRes: '',
};

const getMoviesReducer = (state: MoviesState = initialState, action: any) => {
  switch (action.type) {
    case GET_MOVIES_LIST_RES:
      return {
        ...state,
        getMoviesRes: action.payload,
      };
    case GET_MOVIES_LIST_FAIL:
      return {
        ...state,
        getMoviesErr: action.payload,
      };
    case GET_GENRE_RES:
      return {
        ...state,
        getGenreRes: action.payload,
      };
    case GET_GENRE_FAIL:
      return {
        ...state,
        getGenreErr: action.payload,
      };

    case GET_MOVIES_POPULAR_RES:
      return {
        ...state,
        getMoviesPopularRes: action.payload,
      };
    case GET_MOVIES_POPULAR_FAIL:
      return {
        ...state,
        getMoviesPopularErr: action.payload,
      };

    case GET_MOVIES_TOP_RATED_RES:
      return {
        ...state,
        getMoviesTopRatedRes: action.payload,
      };
    case GET_MOVIES_TOP_RATED_FAIL:
      return {
        ...state,
        getMoviesTopRatedErr: action.payload,
      };
    case SEARCH_MOVIE_RES:
      return {
        ...state,
        searchMoviesRes: action.payload,
      };
    case SEARCH_MOVIE_FAIL:
      return {
        ...state,
        searchMoviesErr: action.payload,
      };
    case ADD_WATCH_LIST_MOVIE_RES:
      return {
        ...state,
        addWatchListMoviesRes: state?.addWatchListMoviesRes?.concat(
          action.payload,
        ),
      };

    case REMOVE_WATCH_LIST_MOVIE_RES:
      return {
        ...state,
        addWatchListMoviesRes: state?.addWatchListMoviesRes?.filter(
          (x: any) => x !== action.payload,
        ),
      };
    case ADD_MOVIE_FAVORITE_REQ:
      return {
        ...state,
        addRemoveMovieFavoriteRes: state?.addRemoveMovieFavoriteRes?.concat(
          action.payload,
        ),
      };
    case REMOVE_MOVIE_FAVORITE_REQ:
      return {
        ...state,
        addRemoveMovieFavoriteRes: state?.addRemoveMovieFavoriteRes?.filter(
          (x: any) => x !== action.payload,
        ),
      };
    case GET_MOVIE_FAVORITE_REQ:
      return {
        ...state,
        addRemoveMovieFavoriteRes: state?.addRemoveMovieFavoriteRes,
      };
    default:
      return state;
  }
};

export default getMoviesReducer;
