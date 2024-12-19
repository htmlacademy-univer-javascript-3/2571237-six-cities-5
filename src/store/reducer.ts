import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  setAuthorizationStatus,
  setOffersDataLoadingStatus,
} from './actions';
import { CityName } from '../constants/city-name';
import { PreviewOffers } from '../types/offer/offer';
import { AuthorizationStatus } from '../constants/authorization-status';

type InitialState = {
  city: CityName;
  offers: PreviewOffers;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: CityName.Paris,
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
