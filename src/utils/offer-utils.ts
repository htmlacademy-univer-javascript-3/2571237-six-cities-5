import { MapPoint } from '../types/map-point';
import { OfferPreview } from '../types/offer/offer';

export function ToMapPoint(offer: OfferPreview): MapPoint {
  return ({id: offer.id, ...offer.location});
}

export function UpdateOfferPreviewItemInList(offers: OfferPreview[], updatedOffer: OfferPreview){
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);
  if (index !== -1){
    offers[index] = updatedOffer;
  }
}
