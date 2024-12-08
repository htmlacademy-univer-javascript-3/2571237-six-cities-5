import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../constants/city-name';
import { Offers } from '../types/offer/offer';
import { AuthorizationStatus } from '../constants/authorization-status';
import { AppRoute } from '../constants/app-route';

export const changeCity = createAction<CityName>('changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
