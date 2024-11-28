import classNames from 'classnames';
import { CityName } from '../../constants/city-name';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeCity } from '../../store/action';
import OffersList from '../offers-list/offers-list';
import EmptyOffersList from '../offers-list/empty-offers-list';

const cities: CityName[] =
[
  CityName.Paris,
  CityName.Cologne,
  CityName.Brussels,
  CityName.Amsterdam,
  CityName.Hamburg,
  CityName.Dusseldorf
];

export default function Cities(){
  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === selectedCity);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) =>(
              <li key={city} className="locations__item">
                <a className={classNames('locations__item-link', 'tabs__item', city === selectedCity && 'tabs__item--active')}
                  href="#" onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(changeCity({city}));
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {offers.length !== 0 ? <OffersList offers={offers} /> : <EmptyOffersList />}
    </>
  );
}
