import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setOffersDataLoadingStatus } from './actions';
import { CityName } from '../constants/city-name';
import { Offers } from '../types/offer/offer';

type InitialState = {
  city: CityName;
  offers: Offers;
  isOffersDataLoading: boolean;
};

const initialState : InitialState = {
  city: CityName.Paris,
  offers: [],
  isOffersDataLoading: false
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
    });
});

export { reducer };
