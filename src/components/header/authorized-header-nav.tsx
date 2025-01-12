import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { MouseEventHandler } from 'react';
import { getFavoritesCount } from '../../store/offers-data/selectors';
import { getUserName } from '../../store/user-data/selectors';

export default function AuthorizedHeaderNav() {
  const favoritesCount = useAppSelector(getFavoritesCount);
  const userName = useAppSelector(getUserName);
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
            <span className="header__user-name user__name">{userName}</span>
            <span className="header__favorite-count">{favoritesCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={handleSignOut}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
