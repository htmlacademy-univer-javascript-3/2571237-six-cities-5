import { OfferPlaceType } from '../../constants/offer-place-type';
import { UserData } from '../user-data';
import { City } from './city';
import { MapLocation } from './map-location';

export type PreviewOffers = PreviewOffer[];

export type PreviewOffer = {
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
};

export type Offer = Omit<PreviewOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserData;
  images: string[];
  maxAdults: number;
};
