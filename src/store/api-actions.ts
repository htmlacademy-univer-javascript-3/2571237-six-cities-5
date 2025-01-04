import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/api-route';
import { redirectToRoute } from './actions';
import { AuthData } from '../types/authorization/auth-data';
import { dropToken, saveToken } from '../services/token';
import { AppRoute } from '../constants/app-route';
import { Offer, OfferPreview } from '../types/offer/offer';
import { Review, ReviewFormSentData, Reviews } from '../types/review';
import { AuthorizedUser } from '../types/authorization/authorized-user';

type Extra = {
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  OfferPreview[],
  undefined,
  Extra
>('previewOffers/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
  return data;
});

export const fetchOfferAction = createAsyncThunk<Offer, Offer['id'], Extra>(
  'offer/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearPlacesAction = createAsyncThunk<
  OfferPreview[],
  Offer['id'],
  Extra
>('nearPlaces/fetch', async (offerId, { extra: api }) => {
  const { data } = await api.get<OfferPreview[]>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  return data;
});

export const fetchReviewsAction = createAsyncThunk<Reviews, Offer['id'], Extra>(
  'reviews/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

type SendReviewActionData = {
  offerId: Offer['id'];
  review: ReviewFormSentData;
};

export const sendReviewAction = createAsyncThunk<Review, SendReviewActionData, Extra>(
  'reviews/send',
  async ({ offerId, review }, { extra: api }) => {
    const { data } = await api.post<Review>(
      `${APIRoute.Reviews}/${offerId}`,
      review
    );
    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<OfferPreview[], undefined, Extra>(
  'favorite/fetch',
  async (_arg, {extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Favorite}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<
  AuthorizedUser,
  undefined,
  Extra
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<AuthorizedUser>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<AuthorizedUser, AuthData, Extra>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<AuthorizedUser>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, Extra>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
