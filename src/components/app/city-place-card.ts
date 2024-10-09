import { ComponentProps } from 'react';
import PlaceCard from '../../pages/main-page/place-card';

export type CityPlaceCard = {
  id: number;
  card: ComponentProps<typeof PlaceCard>;
}
