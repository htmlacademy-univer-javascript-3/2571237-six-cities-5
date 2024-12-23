import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/app-state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/api-route';
import { loadOffers, redirectToRoute, setAuthorizationStatus, setOffersDataLoadingStatus } from './actions';
import { AuthorizationStatus } from '../constants/authorization-status';
import { AuthData } from '../types/authorization/auth-data';
import { dropToken, saveToken } from '../services/token';
import { AppRoute } from '../constants/app-route';
import { PreviewOffers } from '../types/offer/offer';
import { AuthorizedUserData } from '../types/authorization/authorized-user-data';

type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<PreviewOffers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkApiConfig>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthorizedUserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);
