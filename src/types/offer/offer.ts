import { OfferPlaceType } from '../../constants/offer-place-type';
import { City } from './city';
import { MapLocation } from './map-location';

export type Offers = Offer[];

export type Offer = {
  id: string;
  title: string;
  type: OfferPlaceType;
  price: number;
  city: City;
  location: MapLocation;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
