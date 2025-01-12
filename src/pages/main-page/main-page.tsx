import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import { ComponentProps, memo, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';
import Locations from '../../components/locations/locations';
import CitiesEmpty from '../../components/cities/cities-empty';
import { AppBlock } from '../../constants/app-block';
import { Map } from '../../components/map/map';
import { getOffersByCity, ToMapPoint } from '../../utils/offer-utils';
import classNames from 'classnames';
import { dropMapSelectedPointId } from '../../store/map-data/map-data';
import { getActiveCity } from '../../store/cities-data/selectors';
import { setActiveCity } from '../../store/cities-data/cities-data';

const MemoLocations = memo(Locations);

export default function MainPage() {
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const cityOffers = getOffersByCity(offers, activeCity);
  const cityOffersEmpty = cityOffers.length === 0;
  const dispatch = useAppDispatch();

  const handleOnCityClick = useCallback<
    ComponentProps<typeof MemoLocations>['onCityClick']
  >((city) => dispatch(setActiveCity(city)), [dispatch]);

  useEffect(
    () => () => {
      dispatch(dropMapSelectedPointId());
    },
    [activeCity, dispatch]
  );

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <main
        className={classNames(
          'page__main page__main--index',
          cityOffersEmpty && 'page__main--index-empty'
        )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MemoLocations
            activeCity={activeCity}
            onCityClick={handleOnCityClick}
          />
        </div>
        <div className="cities">
          <div
            className={classNames(
              'cities__places-container container',
              cityOffersEmpty && 'cities__places-container--empty'
            )}
          >
            {cityOffersEmpty ? (
              <CitiesEmpty city={activeCity} />
            ) : (
              <Cities cityOffers={cityOffers} />
            )}
            <div className="cities__right-section">
              {!cityOffersEmpty && (
                <Map
                  block={AppBlock.Cities}
                  city={cityOffers[0].city}
                  points={cityOffers.map(ToMapPoint)}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
