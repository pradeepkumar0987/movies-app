import axios, {AxiosError, AxiosResponse} from 'axios';
import {ACCESS_TOKEN, BASE_URL} from '../endpoints';
import {store} from '../store';

interface CustomError {
  status: number;
  data: any;
  message: string;
}

// Create Instance
const Interceptor = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  transformRequest: [
    function (data, headers) {
      headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
      if (data && data._parts) {
        return data;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
});

// Request Interceptor
Interceptor.interceptors.request.use(
  config => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response Interceptor
Interceptor.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return error;
  },
);

export default Interceptor;
