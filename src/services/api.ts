import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { ErrorResponse } from '../types/api/error-response';
import browserHistory from '../common/browser-history';
import { AppRoute } from '../constants/app-route';

const displayedStatusCodes: StatusCodes[] = [
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.NOT_FOUND,
];

const shouldDisplayError = (response: AxiosResponse) =>
  displayedStatusCodes.includes(response.status);

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponse>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailError = error.response.data.details.at(0);
        toast.warn(detailError?.messages.at(0));
      }

      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.NotFound);
      }
      throw error;
    }
  );

  return api;
};
