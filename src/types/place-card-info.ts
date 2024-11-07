import { PlaceType } from '../constants/place-type';

export type PlaceCardInfo = {
  price: number;
  inFavorites: boolean;
  rating: number;
  name: string;
  type: PlaceType;
}
