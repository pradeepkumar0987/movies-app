import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {showToast} from '../../helper/methods';
import {
  DELETE_ACCOUNT_REQ,
  LOGIN_REQ,
  LOGOUT_REQ,
  VALIDATE_PROFILE_REQ,
  deleteAccountFailure,
  deleteAccountResponse,
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutResponse,
  validateProfileFailure,
} from '../actions/authActions';
import {EndPoint} from '../endpoints';
import Interceptor from '../requests/interceptors';
import {startLoaderSaga, stopLoaderSaga} from './loader';

function* logoutRequestSaga({payload, navigation}: any) {
  try {
    yield startLoaderSaga();
    showToast('Logout Successfully', 'success');
    // } else {
    //   yield put(loginFailure(payload, response));
    // }
    yield stopLoaderSaga();
  } catch (error) {
    yield stopLoaderSaga();
    yield put(loginFailure(payload, error));
  }
}

function* authSaga() {
  yield takeLatest(LOGOUT_REQ, logoutRequestSaga);
}

export default authSaga;
