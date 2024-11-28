import { useState } from 'react';
import { Offer } from '../../types/offer/offer';
import { OfferCardType } from '../../constants/offer-card-type';
import OfferCard from '../offer-card/offer-card';
import { Map, MapPoint } from '../map/map';

type OffersListProps = {
  offers: Offer[];
}

export default function OffersList({ offers }: OffersListProps) {
  const [selectedOfferId, setSelectedOfferId] = useState('');
  const city = offers[0].city;
  const offersPoints = offers.map<MapPoint>((offer) => ({id: offer.id, ...offer.location}));

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) =>(
              <OfferCard
                key={offer.id}
                offer={offer}
                type={OfferCardType.MainPage}
                onCardHovered={() => setSelectedOfferId(offer.id)}
              />))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={city} points={offersPoints} selectedPointId={selectedOfferId}/>
        </div>
      </div>
    </div>
  );
}
