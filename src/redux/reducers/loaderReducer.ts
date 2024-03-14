import {START_LOADER, STOP_LOADER} from '../actions/loaderActions';

export interface LoaderState {
  loading: boolean;
}

const initialState = {
  loading: false,
};

const loaderReducer = (state: LoaderState = initialState, action: any) => {
  switch (action.type) {
    case START_LOADER:
      return {...state, loading: true};

    case STOP_LOADER:
      return {...state, loading: false};

    default:
      return state;
  }
};

export default loaderReducer;
