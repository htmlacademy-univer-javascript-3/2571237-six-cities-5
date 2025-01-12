import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites/favoirtes-empty';
import Favorites from '../../components/favorites/favorites';
import {
  getFavoriteFetchingStatus,
  getFavorites,
} from '../../store/favorites-data/selectors';
import { RequestStatus } from '../../constants/request-status';
import Spinner from '../../components/spinner/spinner';
import classNames from 'classnames';

export default function FavoritesPage() {
  const favorites = useAppSelector(getFavorites);
  const fetchingStatus = useAppSelector(getFavoriteFetchingStatus);

  const favoirtesEmpty = favorites.length === 0;

  return (
    <div className={classNames('page', favoirtesEmpty && 'page--favorites-empty')}>
      <Helmet>
        <title>6 cities - favorites</title>
      </Helmet>
      {fetchingStatus === RequestStatus.Pending && <Spinner />}
      {fetchingStatus === RequestStatus.Successful &&
        (favoirtesEmpty ? (
          <FavoritesEmpty />
        ) : (
          <Favorites favoriteOffers={favorites} />
        ))}
      <Footer />
    </div>
  );
}
