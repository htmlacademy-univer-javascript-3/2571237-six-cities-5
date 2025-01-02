import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { RequestStatus } from '../../constants/request-status';
import { fetchNearPlacesAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import OfferDetails from '../../components/offer-details/offer-details';
import { getOfferFetchingStatus } from '../../store/offer-data/selectors';
import { setMapSelectedPointId } from '../../store/map-data/map-data';
import { dropOffer } from '../../store/offer-data/offer-data';
import { dropReviews } from '../../store/reviews-data/reviews-data';
import { dropNearPlaces } from '../../store/near-places-data/near-places-data';

export default function OfferPage() {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(getOfferFetchingStatus);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      dispatch(fetchNearPlacesAction(offerId));
      dispatch(setMapSelectedPointId(offerId));
    }

    return () => {
      dispatch(dropOffer());
      dispatch(dropReviews());
      dispatch(dropNearPlaces());
    };
  }, [offerId, dispatch]);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - offer</title>
      </Helmet>
      <Header />
      {fetchingStatus === RequestStatus.Pending && <Spinner />}
      {fetchingStatus === RequestStatus.Successful && <OfferDetails />}
    </div>
  );
}
