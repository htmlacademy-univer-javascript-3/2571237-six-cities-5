import classNames from 'classnames';
import { AppBlock } from '../../constants/app-block';
import { OfferPreview } from '../../types/offer/offer';
import OffersList from '../offers-list/offers-list';

function getOffersByCity(offers: OfferPreview[]) {
  return offers.reduce<{ [key: string]: OfferPreview[] }>((acc, offer) => {
    const city = offer.city.name;
    if (!(city in acc)) {
      acc[city] = [];
    }

    acc[city].push(offer);

    return acc;
  }, {});
}

type FavoritesProps = {
  favoriteOffers: OfferPreview[];
};

export default function Favorites({ favoriteOffers }: FavoritesProps) {
  const favoriteOffersByCity = getOffersByCity(favoriteOffers);
  return (
    <main className={classNames('page__main page__main--favorites')}>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoriteOffersByCity).map(([city, favorites]) => (
              <li key={city} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList block={AppBlock.Favorites} offers={favorites} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
