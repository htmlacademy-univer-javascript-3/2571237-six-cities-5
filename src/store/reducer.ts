import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillOffers } from './action';
import { CityName } from '../constants/city-name';

const initialState = {
  city: CityName.Paris,
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffers, (state) => {
      state.offers = offers;
    });
});

export { reducer };
