import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../constants/app-route';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { HelmetProvider } from 'react-helmet-async';
import OffersList from '../offers-list/offers-list';
import { ComponentProps } from 'react';


export default function App({ offers }: ComponentProps<typeof OffersList>){
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
