import { ComponentProps } from 'react';
import BookmarkButton from './bookmark-button';
import { AppBlock } from '../../constants/app-block';

type IconSize = {
  width: number;
  height: number;
};

export const iconSize: Record<
  ComponentProps<typeof BookmarkButton>['block'],
  IconSize
> = {
  [AppBlock.OfferCard]: { width: 18, height: 19 },
  [AppBlock.Offer]: { width: 31, height: 33 },
};
