import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/reviews-data/selectors';
import Review from './review';

const MAX_REVIEWS_COUNT = 10;

export default function ReviewsList() {
  const reviews = useAppSelector(getReviews);
  const displayedReviews = reviews
    .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {displayedReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}
