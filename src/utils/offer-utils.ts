import { MapPoint } from '../types/map-point';
import { OfferPreview } from '../types/offer/offer';

export function ToMapPoint(offer: OfferPreview): MapPoint {
  return ({id: offer.id, ...offer.location});
}
