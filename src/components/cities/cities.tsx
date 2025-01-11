import { useCallback, useState } from 'react';
import { AppBlock } from '../../constants/app-block';
import { useAppDispatch } from '../../hooks';
import { OfferPreview } from '../../types/offer/offer';
import OffersList from '../offers-list/offers-list';
import {
  dropMapSelectedPointId,
  setMapSelectedPointId,
} from '../../store/map-data/map-data';
import Sorting from '../sorting/sorting';
import { OffersSortingOption } from '../../constants/offers-sorting-option';
import { offersSortingOptions, offersSortings, sortingOptionLabels } from './offers-sorting';

type CitiesProps = {
  cityOffers: OfferPreview[];
};

export default function Cities({ cityOffers }: CitiesProps) {
  const [sortingOption, setSortingOption] = useState(
    OffersSortingOption.Popular
  );

  cityOffers = offersSortings[sortingOption](cityOffers);
  const city = cityOffers[0].city;
  const dispatch = useAppDispatch();

  const onOfferCardHoveredHandler = useCallback(
    (offerId: OfferPreview['id']) => dispatch(setMapSelectedPointId(offerId)),
    [dispatch]
  );

  const onOfferCardMouseLeftHandler = useCallback(
    () => dispatch(dropMapSelectedPointId()),
    [dispatch]
  );

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {cityOffers.length} places to stay in {city.name}
      </b>
      <Sorting<OffersSortingOption>
        sortingOptions={offersSortingOptions}
        activeOption={sortingOption}
        optionLabels={sortingOptionLabels}
        onChange={setSortingOption}
      />
      <div className="cities__places-list places__list tabs__content">
        <OffersList
          block={AppBlock.Cities}
          offers={cityOffers}
          onCardHovered={onOfferCardHoveredHandler}
          onCardMouseLeft={onOfferCardMouseLeftHandler}
        />
      </div>
    </section>
  );
}
