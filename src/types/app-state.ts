import { AuthorizationStatus } from '../constants/authorization-status';
import { RequestStatus } from '../constants/request-status';
import { store } from '../store';
import { AuthorizedUser } from './authorization/authorized-user';
import { MapPoint } from './map-point';
import { Offer, OfferPreview } from './offer/offer';
import { Reviews } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  user: AuthorizedUser | null;
  authorizationStatus: AuthorizationStatus;
};

export type OffersData = {
  offers: OfferPreview[];
  offersFetchingStatus: RequestStatus;
};

export type OfferData = {
  offer: Offer | null;
  offerFetchingStatus: RequestStatus;
};

export type ReviewsData = {
  reviews: Reviews;
  reviewSendingStatus: RequestStatus;
};

export type NearPlacesData = {
  nearPlaces: OfferPreview[];
};

export type MapData = {
  selectedPointId: MapPoint['id'] | null;
};
