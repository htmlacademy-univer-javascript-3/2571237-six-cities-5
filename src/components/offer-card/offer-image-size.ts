import { ComponentProps } from 'react';
import { AppBlock } from '../../constants/app-block';
import OfferCard from './offer-card';

type ImageSize = {
  width: number;
  height: number;
};

export const offerPreviewImageSizes: Record<
  ComponentProps<typeof OfferCard>['block'],
  ImageSize
> = {
  [AppBlock.Cities]: { width: 260, height: 200 },
  [AppBlock.NearPlaces]: { width: 260, height: 200 },
  [AppBlock.Favorites]: { width: 150, height: 110 },
};
