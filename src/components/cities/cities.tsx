import classNames from 'classnames';
import { CityName } from '../../constants/city-name';
import OffersList from '../offers-list/offers-list';
import EmptyOffersList from '../offers-list/empty-offers-list';
import { useAppSelector } from '../../hooks';
import { OfferPreview } from '../../types/offer/offer';
import { useState } from 'react';
import { getOffers } from '../../store/offers-data/selectors';

const cities: CityName[] = Object.values(CityName);

function getOffersByCity(offers: OfferPreview[], city: CityName) {
  return offers.filter((offer) => offer.city.name === city);
}

export default function Cities() {
  const [activeCity, setActiveCity] = useState(CityName.Paris);
  const offers = useAppSelector(getOffers);
  const cityOffers = getOffersByCity(offers, activeCity);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li key={city} className="locations__item">
                <a
                  className={classNames(
                    'locations__item-link',
                    'tabs__item',
                    city === activeCity && 'tabs__item--active'
                  )}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setActiveCity(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {offers.length !== 0 ? (
        <OffersList offers={cityOffers} />
      ) : (
        <EmptyOffersList city={activeCity} />
      )}
    </>
  );
}
