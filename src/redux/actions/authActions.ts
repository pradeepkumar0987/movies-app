export const VALIDATE_PROFILE_REQ = 'VALIDATE_PROFILE_REQ';
export const VALIDATE_PROFILE_FAIL = 'VALIDATE_PROFILE_FAIL';

export const validateProfileRequest = (payload: any, navigation: any) => ({
  type: VALIDATE_PROFILE_REQ,
  payload,
  navigation,
});

export const validateProfileFailure = (request: any, payload: any) => ({
  type: VALIDATE_PROFILE_FAIL,
  request,
  payload,
});

export const LOGIN_REQ = 'LOGIN_REQ';
export const LOGIN_RES = 'LOGIN_RES';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginRequest = (payload: any, navigation: any) => ({
  type: LOGIN_REQ,
  payload,
  navigation,
});

export const loginSuccess = (payload: any) => ({
  type: LOGIN_RES,
  payload,
});

export const loginFailure = (request: any, payload: any) => ({
  type: LOGIN_FAIL,
  request,
  payload,
});

export const LOGOUT_REQ = 'LOGOUT_REQ';
export const LOGOUT_RES = 'LOGOUT_RES';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const logoutRequest = (payload: any) => ({
  type: LOGOUT_REQ,
  payload,
});

export const logoutResponse = (payload: any) => ({
  type: LOGOUT_RES,
  payload,
});

export const logoutFailure = (payload: any) => ({
  type: LOGOUT_FAIL,
  payload,
});

export const DELETE_ACCOUNT_REQ = 'DELETE_ACCOUNT_REQ';
export const DELETE_ACCOUNT_RES = 'DELETE_ACCOUNT_RES';
export const DELETE_ACCOUNT_FAIL = 'DELETE_ACCOUNT_FAIL';

export const deleteAccountRequest = (payload: any) => ({
  type: DELETE_ACCOUNT_REQ,
  payload,
});

export const deleteAccountResponse = (payload: any) => ({
  type: DELETE_ACCOUNT_RES,
  payload,
});

export const deleteAccountFailure = (payload: any) => ({
  type: DELETE_ACCOUNT_FAIL,
  payload,
});
