import { OfferPreview } from '../../types/offer/offer';
import { ComponentProps, memo } from 'react';
import OfferCard from '../offer-card/offer-card';

const MemoOfferCard = memo(OfferCard);

type OffersListProps = Pick<
  ComponentProps<typeof OfferCard>,
  'block' | 'onCardHovered' | 'onCardMouseLeft'
> & {
  offers: OfferPreview[];
};

export default function OffersList(props: OffersListProps) {
  return (
    <>
      {props.offers.map((offer) => (
        <MemoOfferCard
          key={offer.id}
          offer={offer}
          block={props.block}
          onCardHovered={props.onCardHovered}
          onCardMouseLeft={props.onCardMouseLeft}
        />
      ))}
    </>
  );
}
