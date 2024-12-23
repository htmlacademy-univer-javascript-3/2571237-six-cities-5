import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';

type HeaderLogoProps = PropsWithChildren<{
  onMainPage?: boolean;
}>;

export default function HeaderLogo({ onMainPage, children }: HeaderLogoProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {onMainPage ? (
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            ) : (
              <Link
                to={AppRoute.Main}
                className="header__logo-link header__logo-link--active"
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            )}
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}
