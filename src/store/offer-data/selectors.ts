import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getOffer = (state: State) => state[Namespace.Offer].offer;

export const getOfferFetchingStatus = (state: State) => state[Namespace.Offer].offerFetchingStatus;
