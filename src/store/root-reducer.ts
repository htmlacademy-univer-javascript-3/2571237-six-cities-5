import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../constants/store-namespace';
import { offersData } from './offers-data/offers-data';
import { mapProcess } from './map-data/map-data';
import { userData } from './user-data/user-data';
import { reviewsData } from './reviews-data/reviews-data';
import { nearPlacesData } from './near-places-data/near-places-data';
import { offerData } from './offer-data/offer-data';

export const rootReducer = combineReducers({
  [Namespace.User]: userData.reducer,
  [Namespace.Offers]: offersData.reducer,
  [Namespace.Offer]: offerData.reducer,
  [Namespace.Reviews]: reviewsData.reducer,
  [Namespace.NearPlaces]: nearPlacesData.reducer,
  [Namespace.Map]: mapProcess.reducer,
});
