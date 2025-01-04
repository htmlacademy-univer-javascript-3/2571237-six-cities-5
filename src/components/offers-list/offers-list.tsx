import { OfferPreview } from '../../types/offer/offer';
import OfferCard from '../offer-card/offer-card';
import { ComponentProps } from 'react';

type OffersListProps = Pick<
  ComponentProps<typeof OfferCard>,
  'block' | 'onCardHovered'
> & {
  offers: OfferPreview[];
};

export default function OffersList(props: OffersListProps) {
  return (
    <>
      {props.offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} {...props} />
      ))}
    </>
  );
}
