import { AppBlock } from '../../constants/app-block';
import { useAppDispatch } from '../../hooks';
import {
  setMapSelectedPointId,
  dropMapSelectedPointId,
} from '../../store/map-data/map-data';
import { OfferPreview } from '../../types/offer/offer';
import OfferCard from '../offer-card/offer-card';
import { ComponentProps } from 'react';

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
        <OfferCard key={offer.id} offer={offer} {...props} />
      ))}
    </>
  );
}
