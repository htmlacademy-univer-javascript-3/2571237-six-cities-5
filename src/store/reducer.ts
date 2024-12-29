import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  clearReviewSendingStatus,
  dropOffer,
  setAuthorizationStatus,
} from './actions';
import { CityName } from '../constants/city-name';
import { Offer, OfferPreview } from '../types/offer/offer';
import { AuthorizationStatus } from '../constants/authorization-status';
import { RequestStatus } from '../constants/request-status';
import { fetchNearPlacesAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, sendReviewAction } from './api-actions';
import { Reviews } from '../types/review';

type InitialState = {
  city: CityName;
  offers: OfferPreview[];
  offersFetchingStatus: RequestStatus;
  offer: Offer | null;
  offerFetchingStatus: RequestStatus;
  nearPlaces: OfferPreview[];
  reviews: Reviews;
  reviewSendingStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: CityName.Paris,
  offers: [],
  offersFetchingStatus: RequestStatus.Idle,
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
  nearPlaces: [],
  reviews: [],
  reviewSendingStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.offersFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.offersFetchingStatus = RequestStatus.Successful;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.offersFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.offerFetchingStatus = RequestStatus.Successful;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.offerFetchingStatus = RequestStatus.Idle;
      state.nearPlaces = [];
      state.reviews = [];
    })
    .addCase(sendReviewAction.pending, (state) => {
      state.reviewSendingStatus = RequestStatus.Pending;
    })
    .addCase(sendReviewAction.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
      state.reviewSendingStatus = RequestStatus.Successful;
    })
    .addCase(sendReviewAction.rejected, (state) => {
      state.reviewSendingStatus = RequestStatus.Error;
    })
    .addCase(clearReviewSendingStatus, (state) => {
      state.reviewSendingStatus = RequestStatus.Idle;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
