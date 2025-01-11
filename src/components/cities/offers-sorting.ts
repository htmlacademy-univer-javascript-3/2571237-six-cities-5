import { OffersSortingOption } from '../../constants/offers-sorting-option';
import { OfferPreview } from '../../types/offer/offer';

export const offersSortingOptions = Object.values(OffersSortingOption);

export const sortingOptionLabels: Record<OffersSortingOption, string> = {
  [OffersSortingOption.Popular]: 'Popular',
  [OffersSortingOption.PriceLowToHigh]: 'Price: low to high',
  [OffersSortingOption.PriceHighToLow]: 'Price: high to low',
  [OffersSortingOption.TopRatedFirst]: 'Top rated first',
};

type offersSorting = (offers: OfferPreview[]) => OfferPreview[];

export const offersSortings: Record<OffersSortingOption, offersSorting> = {
  [OffersSortingOption.Popular]: (offers) => offers,
  [OffersSortingOption.PriceHighToLow]: (offers) =>
    offers.toSorted((a, b) => b.price - a.price),
  [OffersSortingOption.PriceLowToHigh]: (offers) =>
    offers.toSorted((a, b) => a.price - b.price),
  [OffersSortingOption.TopRatedFirst]: (offers) =>
    offers.toSorted((a, b) => b.rating - a.rating),
};
