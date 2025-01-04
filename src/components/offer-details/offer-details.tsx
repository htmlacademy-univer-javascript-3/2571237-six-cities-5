import { AppBlock } from '../../constants/app-block';
import { useAppSelector } from '../../hooks';
import { isUserAuthorized } from '../../store/user-data/selectors';
import { Offer } from '../../types/offer/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';
import OfferHost from '../offer-host/offer-host';
import Rating from '../rating/rating';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferDetailsProps = {
  offer: Offer;
}

export default function OfferDetails({ offer }: OfferDetailsProps) {

  const authorized = useAppSelector(isUserAuthorized);

  return (
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
            block={AppBlock.Offer}
            isActive={!!offer.isFavorite}
          />
        </div>
        <Rating block={AppBlock.Offer} rating={offer.rating}>
          <span className="offer__rating-value rating__value">
            {offer.rating}
          </span>
        </Rating>
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
        <section className="offer__reviews reviews">
          <ReviewsList />
          {authorized && <ReviewForm />}
        </section>
      </div>
    </div>
  );
}
