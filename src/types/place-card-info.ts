import { OfferPlaceType } from '../constants/offer-place-type';

export type PlaceCardInfo = {
  price: number;
  inFavorites: boolean;
  rating: number;
  name: string;
  type: OfferPlaceType;
}
