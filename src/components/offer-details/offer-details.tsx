import { AppBlock } from '../../constants/app-block';
import { MapBlock } from '../../constants/map-block';
import { OfferCardBlock } from '../../constants/offer-card-block';
import { useAppSelector } from '../../hooks';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { Map } from '../map/map';
import OfferCard from '../offer-card/offer-card';
import OfferHost from '../offer-host/offer-host';
import ReviewsList from '../reviews-list/reviews-list';

const MAX_NEAR_PLACES_COUNT = 3;
const MAX_OFFER_IMAGES_COUNT = 6;

export default function OfferDetails() {
  const offer = useAppSelector((state) => state.offer)!;
  const nearPlaces = useAppSelector((state) => state.nearPlaces).slice(
    0,
    MAX_NEAR_PLACES_COUNT
  );

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.slice(0, MAX_OFFER_IMAGES_COUNT).map((imgSrc) => (
              <div key={imgSrc} className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={imgSrc}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <BookmarkButton
                block={AppBlock.OfferDetails}
                isActive={!!offer.isFavorite}
              />
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${offer.rating * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {offer.rating}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {`${offer.bedrooms} Bedrooms`}
              </li>
              <li className="offer__feature offer__feature--adults">
                {`Max ${offer.maxAdults} adults`}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((item) => (
                  <li key={item} className="offer__inside-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OfferHost host={offer.host} description={offer.description} />
            <ReviewsList />
          </div>
        </div>
        <div className="container">
          <Map
            block={MapBlock.Offer}
            city={offer.city}
            points={nearPlaces
              .concat([offer])
              .map((place) => ({ id: place.id, ...place.location }))}
            selectedPointId={offer.id}
          />
        </div>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {nearPlaces.map((place) => (
              <OfferCard
                key={place.id}
                block={OfferCardBlock.NearPlaces}
                offer={place}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
