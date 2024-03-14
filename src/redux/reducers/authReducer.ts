import {removeStorageData} from '../../helper/services';
import {
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_RES,
  LOGIN_FAIL,
  LOGIN_RES,
  LOGOUT_RES,
  VALIDATE_PROFILE_FAIL,
} from '../actions/authActions';

export interface AuthState {
  validateProfileErr: string;
  loginRes: any;
  loginErr: string;
  deleteAccountRes: any;
  deleteAccountErr: string;
}

const initialState = {
  validateProfileErr: '',
  loginRes: '',
  loginErr: '',
  deleteAccountRes: '',
  deleteAccountErr: '',
};

const authReducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case VALIDATE_PROFILE_FAIL:
      return {
        ...state,
        validateProfileErr: action.payload,
      };
    case LOGIN_RES:
      return {
        ...state,
        loginRes: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginErr: action.payload,
      };
    case LOGOUT_RES:
      return {
        ...state,
        loginRes: removeStorageData('profile'),
      };
    case DELETE_ACCOUNT_RES:
      return {
        ...state,
        loginRes: '',
      };
    case DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        deleteAccountErr: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
