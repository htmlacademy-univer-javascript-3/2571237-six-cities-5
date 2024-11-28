import { CityName } from '../../constants/city-name';
import { MapLocation } from './map-location';

export type City = {
  name: CityName;
  location: MapLocation;
}
