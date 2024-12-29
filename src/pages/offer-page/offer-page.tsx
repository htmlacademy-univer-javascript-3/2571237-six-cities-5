import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { RequestStatus } from '../../constants/request-status';
import { fetchNearPlacesAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { dropOffer } from '../../store/actions';
import Spinner from '../../components/spinner/spinner';
import OfferDetails from '../../components/offer-details/offer-details';

export default function OfferPage() {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector((state) => state.offerFetchingStatus);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchNearPlacesAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    }

    return () => {
      dispatch(dropOffer());
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
