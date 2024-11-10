import { OfferCardType } from '../../constants/offer-card-type';

type ImageSize = {
  'width': number;
  'height': number;
};

export const offerPreviewImageSizes: Record<OfferCardType, ImageSize> = {
  [OfferCardType.MainPage]: {width: 260, height: 200},
  [OfferCardType.FavoritesPage]: {width: 150, height: 110}
};
