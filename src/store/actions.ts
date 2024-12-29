import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../constants/city-name';
import { AuthorizationStatus } from '../constants/authorization-status';
import { AppRoute } from '../constants/app-route';

export const changeCity = createAction<CityName>('changeCity');

export const dropOffer = createAction('offer/drop');

export const clearReviewSendingStatus = createAction('reviews/clear');

export const setAuthorizationStatus = createAction<AuthorizationStatus>(
  'user/setAuthorizationStatus'
);

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
