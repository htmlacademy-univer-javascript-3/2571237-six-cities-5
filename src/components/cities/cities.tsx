import { AppBlock } from '../../constants/app-block';
import { useAppDispatch } from '../../hooks';
import { OfferPreview } from '../../types/offer/offer';
import OffersList from '../offers-list/offers-list';
import { setMapSelectedPointId } from '../../store/map-data/map-data';

type CitiesProps = {
  cityOffers: OfferPreview[];
};

export default function Cities({ cityOffers }: CitiesProps) {
  const city = cityOffers[0].city;
  const dispatch = useAppDispatch();

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {cityOffers.length} places to stay in {city.name}
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom">
          <li className="places__option places__option--active" tabIndex={0}>
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        <OffersList
          block={AppBlock.Cities}
          offers={cityOffers}
          onCardHovered={(offerId) => dispatch(setMapSelectedPointId(offerId))}
        />
      </div>
    </section>
  );
}
