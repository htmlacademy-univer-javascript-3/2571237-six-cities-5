import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { RequestStatus } from '../../constants/request-status';
import {
  fetchNearPlacesAction,
  fetchOfferAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import OfferDetails from '../../components/offer-details/offer-details';
import {
  getOffer,
  getOfferFetchingStatus,
} from '../../store/offer-data/selectors';
import {
  dropMapSelectedPointId,
  setMapSelectedPointId,
} from '../../store/map-data/map-data';
import { dropOffer } from '../../store/offer-data/offer-data';
import { dropReviews } from '../../store/reviews-data/reviews-data';
import { dropNearPlaces } from '../../store/near-places-data/near-places-data';
import { AppBlock } from '../../constants/app-block';
import { Map } from '../../components/map/map';
import { getNearPlaces } from '../../store/near-places-data/selectors';
import { ToMapPoint } from '../../utils/offer-utils';
import OffersList from '../../components/offers-list/offers-list';
import OfferCard from '../../components/offer-card/offer-card';

const MAX_NEAR_PLACES_COUNT = 3;
const MAX_OFFER_IMAGES_COUNT = 6;

export default function OfferPage() {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(getOfferFetchingStatus);
  const offer = useAppSelector(getOffer);
  const nearPlaces = useAppSelector(getNearPlaces).slice(
    0,
    MAX_NEAR_PLACES_COUNT
  );

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
      dispatch(dropMapSelectedPointId());
    };
  }, [offerId, dispatch]);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - offer</title>
      </Helmet>
      {fetchingStatus === RequestStatus.Pending && <Spinner />}
      {fetchingStatus === RequestStatus.Successful && offer && (
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.slice(0, MAX_OFFER_IMAGES_COUNT).map((imgSrc) => (
                  <div key={imgSrc} className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={imgSrc}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <OfferDetails offer={offer} />
            <div className="container">
              <Map
                block={AppBlock.Offer}
                city={offer.city}
                points={nearPlaces.concat([offer]).map(ToMapPoint)}
              />
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {nearPlaces.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    block={AppBlock.NearPlaces}
                    offer={offer}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      )}
    </div>
  );
}
