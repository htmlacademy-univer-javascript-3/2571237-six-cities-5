import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../constants/city-name';
import { Offers } from '../types/offer/offer';

export const changeCity = createAction<CityName>('changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
