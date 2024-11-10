import { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Offer } from '../../types/offer/offer';
import { AppRoute } from '../../constants/app-route';
import { Link } from 'react-router-dom';
import { offerPreviewImageSizes } from './offer-preview-image-size';
import { OfferCardType } from '../../constants/offer-card-type';

type OfferCardProps = {
  offer: Offer;
  type: OfferCardType;
  onCardHovered?: MouseEventHandler<HTMLElement>;
}

export default function OfferCard({offer, type, onCardHovered}: OfferCardProps){
  return (
    <article onMouseEnter={onCardHovered}
      className={classNames('place-card', type === OfferCardType.FavoritesPage ? 'favorites__card' : 'cities__card')}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div
        className={
          classNames('place-card__image-wrapper',
            type === OfferCardType.FavoritesPage ? 'favorites__image-wrapper' : 'cities__image-wrapper')
        }
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            {...offerPreviewImageSizes[type]}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames('place-card__bookmark-button', offer.isFavorite && 'place-card__bookmark-button--active', 'button')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In Bookmarks' : 'To Bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
