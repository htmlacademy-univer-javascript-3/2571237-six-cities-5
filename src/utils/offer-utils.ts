import { CityName } from '../constants/city-name';
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

export function getOffersByCity(offers: OfferPreview[], city: CityName) {
  return offers.filter((offer) => offer.city.name === city);
}

export function getOffersByCityMap(offers: OfferPreview[]) {
  return offers.reduce<{ [key: string]: OfferPreview[] }>((acc, offer) => {
    const city = offer.city.name;
    if (!(city in acc)) {
      acc[city] = [];
    }

    acc[city].push(offer);

    return acc;
  }, {});
}

export function convertRatingToWidthInPercent(rating: number){
  return Math.round(rating) * 20;
}
