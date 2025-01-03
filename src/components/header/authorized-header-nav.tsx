import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { MouseEventHandler } from 'react';
import { OfferPreview } from '../../types/offer/offer';

function getFavoriteOffersCount(offers: OfferPreview[]) {
  return offers.filter((offer) => offer.isFavorite).length;
}

export default function AuthorizedHeaderNav() {
  const favoriteCount = useAppSelector((state) =>
    getFavoriteOffersCount(state.offers)
  );
  const dispatch = useAppDispatch();

  const handleSignOut: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            to={AppRoute.Favorites}
            className="header__nav-link header__nav-link--profile"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
            <span className="header__favorite-count">{favoriteCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            onClick={handleSignOut}
            to={AppRoute.Main}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
