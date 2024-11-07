import { MouseEventHandler } from 'react';
import PlaceCardInfo from './place-card-info';
import classNames from 'classnames';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../constants/app-route';
import { Link } from 'react-router-dom';
import { PlaceImageSize } from './image-size';
import { OfferCardType } from '../../constants/offer-card-type';

type OfferCardProps = {
  offer: Offer;
  type: OfferCardType;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
}

export default function OfferCard({offer, type, onMouseEnter}: OfferCardProps){
  const placeCard = offer.placeCard;
  return (
    <article onMouseEnter={onMouseEnter}
      className={classNames('place-card', type === OfferCardType.FavoritesPage ? 'favorites__card' : 'cities__card')}
    >
      {placeCard.isPremium &&
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
            src={placeCard.imageSrc}
            width={PlaceImageSize[type].width}
            height={PlaceImageSize[type].height}
            alt="Place image"
          />
        </Link>
      </div>
      <PlaceCardInfo
        offerId={offer.id}
        info={placeCard.info}
      />
    </article>
  );
}
