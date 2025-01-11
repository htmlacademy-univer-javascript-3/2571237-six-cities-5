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
import { FavoriteStatus } from '../constants/favorite-status';
import { AppDispatch, State } from '../types/app-state';
import { Namespace } from '../constants/store-namespace';
import { updateOffer } from './offer-data/offer-data';
import { deleteFavorite } from './favorites-data/favorites-data';

type Extra = {
  dispatch: AppDispatch;
  state: State;
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

export const sendReviewAction = createAsyncThunk<
  Review,
  SendReviewActionData,
  Extra
>('reviews/send', async ({ offerId, review }, { extra: api }) => {
  const { data } = await api.post<Review>(
    `${APIRoute.Reviews}/${offerId}`,
    review
  );
  return data;
});

export const fetchFavoritesAction = createAsyncThunk<
  OfferPreview[],
  undefined,
  Extra
>('favorites/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferPreview[]>(`${APIRoute.Favorite}`);
  return data;
});

type ChangeFavoriteStatusData = {
  offerId: Offer['id'];
  status: FavoriteStatus;
};

export const changeFavoriteStatusAction = createAsyncThunk<
  Offer,
  ChangeFavoriteStatusData,
  Extra
>(
  'favorites/update',
  async ({ offerId, status }, { dispatch, getState, extra: api }) => {
    const { data } = await api.post<Offer>(
      `${APIRoute.Favorite}/${offerId}/${status}`
    );

    if (getState()[Namespace.Offer].offer?.id === offerId) {
      dispatch(updateOffer(data));
    }

    if (status === FavoriteStatus.Unfavorite) {
      dispatch(deleteFavorite(data));
    }

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
