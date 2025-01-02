import { OfferPlaceType } from '../../constants/offer-place-type';
import { User } from '../user';
import { City } from './city';
import { MapLocation } from './map-location';

export type OfferPreview = {
  id: string;
  title: string;
  type: OfferPlaceType;
  price: number;
  city: City;
  location: MapLocation;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
};

export type Host = User;

export type Offer = OfferPreview & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
