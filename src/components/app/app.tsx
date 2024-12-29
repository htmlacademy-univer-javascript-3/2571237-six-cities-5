import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../constants/app-route';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ProtectedRoute from '../protected-route/protected-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../common/browser-history';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { RequestStatus } from '../../constants/request-status';

export default function App() {
  const fetchingStatus = useAppSelector(
    (state) => state.offersFetchingStatus
  );

  if (fetchingStatus === RequestStatus.Pending) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectTo={AppRoute.Main}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Main}
              >
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
