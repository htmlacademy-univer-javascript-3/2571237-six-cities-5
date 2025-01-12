import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getOffers = (state: State) => state[Namespace.Offers].offers;

export const getOffersFetchingStatus = (state: State) =>
  state[Namespace.Offers].offersFetchingStatus;

export const getFavoritesCount = (state: State) =>
  state[Namespace.Offers].offers.filter((offer) => offer.isFavorite).length;
