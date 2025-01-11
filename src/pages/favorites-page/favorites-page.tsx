import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites/favoirtes-empty';
import Favorites from '../../components/favorites/favorites';
import {
  getFavoriteFetchingStatus,
  getFavorites,
} from '../../store/favorites-data/selectors';
import { RequestStatus } from '../../constants/request-status';
import Spinner from '../../components/spinner/spinner';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import { dropFavorites } from '../../store/favorites-data/favorites-data';

export default function FavoritesPage() {
  const favorites = useAppSelector(getFavorites);
  const fetchingStatus = useAppSelector(getFavoriteFetchingStatus);
  const dispatch = useAppDispatch();

  const favoirtesEmpty = favorites.length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesAction());

    return () => {
      dispatch(dropFavorites());
    };
  }, [dispatch]);

  return (
    <div className="page">
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
