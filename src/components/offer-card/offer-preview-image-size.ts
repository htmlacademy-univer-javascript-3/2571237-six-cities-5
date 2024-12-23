import { OfferCardBlock } from '../../constants/offer-card-block';

type ImageSize = {
  'width': number;
  'height': number;
};

export const offerPreviewImageSizes: Record<OfferCardBlock, ImageSize> = {
  [OfferCardBlock.Cities]: {width: 260, height: 200},
  [OfferCardBlock.NearPlaces]: {width: 260, height: 200},
  [OfferCardBlock.Favorites]: {width: 150, height: 110}
};
