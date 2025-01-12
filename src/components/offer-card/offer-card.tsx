import classNames from 'classnames';
import { OfferPreview } from '../../types/offer/offer';
import { AppRoute } from '../../constants/app-route';
import { Link } from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import { AppBlock } from '../../constants/app-block';
import { MouseEventHandler } from 'react';
import { offerPreviewImageSizes } from './offer-image-size';

type OfferCardBlock =
  | AppBlock.Cities
  | AppBlock.NearPlaces
  | AppBlock.Favorites;

type onOfferCardHoveredHandler = (offerId: OfferPreview['id']) => void;

type OfferCardProps = {
  block: OfferCardBlock;
  offer: OfferPreview;
  onCardHovered?: onOfferCardHoveredHandler;
  onCardMouseLeft?: MouseEventHandler<HTMLElement>;
};

export default function OfferCard({
  block,
  offer,
  onCardHovered,
  onCardMouseLeft,
}: OfferCardProps) {
  return (
    <article
      className={classNames('place-card', `${block}__card`)}
      onMouseEnter={() => onCardHovered?.(offer.id)}
      onMouseLeave={onCardMouseLeft}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={classNames(
          'place-card__image-wrapper',
          `${block}__image-wrapper`
        )}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            {...offerPreviewImageSizes[block]}
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
          <BookmarkButton
            block={AppBlock.OfferCard}
            offerId={offer.id}
            isActive={!!offer.isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <Rating block={AppBlock.OfferCard} rating={offer.rating} />
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
