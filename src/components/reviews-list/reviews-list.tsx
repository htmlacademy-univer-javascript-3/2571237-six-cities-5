import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/reviews-data/selectors';
import { isUserAuthorized } from '../../store/user-data/selectors';
import ReviewForm from '../review-form/review-form';
import Review from './review';

const MAX_REVIEWS_COUNT = 10;

export default function ReviewsList() {
  const reviews = useAppSelector(getReviews)
    .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);
  const authorized = useAppSelector(isUserAuthorized);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      {authorized && <ReviewForm />}
    </section>
  );
}
