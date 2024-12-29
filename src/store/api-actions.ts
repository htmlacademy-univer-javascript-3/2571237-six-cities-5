import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/api-route';
import { redirectToRoute, setAuthorizationStatus } from './actions';
import { AuthorizationStatus } from '../constants/authorization-status';
import { AuthData } from '../types/authorization/auth-data';
import { dropToken, saveToken } from '../services/token';
import { AppRoute } from '../constants/app-route';
import { Offer, OfferPreview } from '../types/offer/offer';
import { AuthorizedUserData } from '../types/authorization/authorized-user-data';
import { Review, ReviewFormData, Reviews } from '../types/review';

type Extra = {
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<OfferPreview[], undefined, Extra>(
  'previewOffers/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<Offer, Offer['id'], Extra>(
  'offer/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearPlacesAction = createAsyncThunk<OfferPreview[], Offer['id'], Extra>(
  'nearPlaces/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Reviews, Offer['id'], Extra>(
  'reviews/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

type ReviewData = {
  offerId: Offer['id'];
  review: ReviewFormData;
}

export const sendReviewAction = createAsyncThunk<Review, ReviewData, Extra>(
  'reviews/send',
  async ({ offerId, review }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, review);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, Extra>(
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

export const loginAction = createAsyncThunk<void, AuthData, Extra>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthorizedUserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, Extra>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);
