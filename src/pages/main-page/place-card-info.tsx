import { PlaceType } from '../../components/common/place-type';

type PlaceCardInfoProps = {
  priceInEuro: number;
  inBookmarks: boolean;
  ratingInPercentage: number;
  name: string;
  type: PlaceType;
}

function getBookmarksButtonClassName(placeCardInBookmarks: boolean){
  let className = 'place-card__bookmark-button button';
  if (placeCardInBookmarks){
    className += ' place-card__bookmark-button--active';
  }

  return className;
}

export default function PlaceCardInfo(props: PlaceCardInfoProps){
  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{props.priceInEuro}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={getBookmarksButtonClassName(props.inBookmarks)}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{props.inBookmarks ? 'In Bookmarks' : 'To Bookmarks'}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${props.ratingInPercentage}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{props.name}</a>
      </h2>
      <p className="place-card__type">{props.type}</p>
    </div>
  );
}
