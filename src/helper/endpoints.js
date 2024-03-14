import _axios from 'axios';
import {BASE_URL} from '@env';

const axios = _axios.create({baseURL: BASE_URL});

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};

const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    //crashlytics().log(error.toString());
  }
  return Promise.reject({...error});
};

axios.interceptors.request.use(config => {
  config.headers.post['os_version'] = ''; //TODO configure os, platform and app version here
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => errorHandler(error),
);

/**
 * Common method to make POST API call, we can confire and pass headers here so it can be resusable
 * @param url
 * @param body
 * @param headers
 */
export const _makePostRequest = async (url, body = {}) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const postRequest = axios.post(url, body, options);
    return postRequest;
  } catch (err) {}
};

/**
 * Common method to make GET API call, we can confire and pass headers here so it can be resusable
 * @param url
 * @param headers
 */
export const _makeGetRequest = async (url, params = {}) => {
  const options = {
    params,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const postRequest = axios.get(url, options);
    return postRequest;
  } catch (err) {}
};
