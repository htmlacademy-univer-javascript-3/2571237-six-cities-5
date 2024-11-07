import classNames from 'classnames';
import type { PlaceCardInfo } from '../../types/place-card-info';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';

type PlaceCardInfoProps = {
  offerId: number;
  info: PlaceCardInfo;
}

export default function PlaceCardInfo({offerId, info}: PlaceCardInfoProps){
  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{info.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={classNames('place-card__bookmark-button', info.inFavorites && 'place-card__bookmark-button--active', 'button')}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{info.inFavorites ? 'In Bookmarks' : 'To Bookmarks'}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${info.rating * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${offerId}`}>{info.name}</Link>
      </h2>
      <p className="place-card__type">{info.type}</p>
    </div>
  );
}
