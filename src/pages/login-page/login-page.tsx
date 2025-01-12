import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header/header-logo';
import LoginForm from '../../components/login-form/login-form';
import { CityName } from '../../constants/city-name';
import { getRandomItem } from '../../utils/random';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { MouseEventHandler } from 'react';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/cities-data/cities-data';

const cities = Object.values(CityName);

export default function LoginPage() {
  const randomCity = getRandomItem(cities);
  const dispatch = useAppDispatch();

  const handleOnLocationClick: MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(setActiveCity(randomCity));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities - login</title>
      </Helmet>
      <HeaderLogo />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleOnLocationClick}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
