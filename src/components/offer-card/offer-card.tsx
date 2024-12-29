import { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { OfferPreview } from '../../types/offer/offer';
import { AppRoute } from '../../constants/app-route';
import { Link } from 'react-router-dom';
import { offerPreviewImageSizes } from './offer-preview-image-size';
import { OfferCardBlock } from '../../constants/offer-card-block';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import { AppBlock } from '../../constants/app-block';

type OfferCardProps = {
  block: OfferCardBlock;
  offer: OfferPreview;
  onCardHovered?: MouseEventHandler<HTMLElement>;
};

export default function OfferCard({
  block,
  offer,
  onCardHovered,
}: OfferCardProps) {
  return (
    <article
      onMouseEnter={onCardHovered}
      className={classNames('place-card', `${block}__card`)}
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
          <BookmarkButton block={AppBlock.OfferCard} isActive={!!offer.isFavorite} />
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
