import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../constants/city-name';
import { AuthorizationStatus } from '../constants/authorization-status';
import { AppRoute } from '../constants/app-route';
import { PreviewOffers } from '../types/offer/offer';

export const changeCity = createAction<CityName>('changeCity');

export const loadOffers = createAction<PreviewOffers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
