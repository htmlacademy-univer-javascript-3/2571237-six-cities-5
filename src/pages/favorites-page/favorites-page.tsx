import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer/offer';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites/favoirtes-empty';
import Favorites from '../../components/favorites/favorites';

function getFavoriteOffers(offers: OfferPreview[]) {
  return offers.filter((offer) => offer.isFavorite);
}

export default function FavoritesPage() {
  const favoriteOffers = useAppSelector((state) =>
    getFavoriteOffers(state.offers)
  );

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - favorites</title>
      </Helmet>
      <Header />

      {favoriteOffers.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <Favorites favoriteOffers={favoriteOffers} />
      )}
      <Footer />
    </div>
  );
}
