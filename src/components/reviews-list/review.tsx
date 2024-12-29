import { AppBlock } from '../../constants/app-block';
import { type Review } from '../../types/review';
import Rating from '../rating/rating';
import User from '../user/user';

const displayedformatOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
};

function getDisplayedFormatedDate(date: string) {
  return new Date(date).toLocaleDateString('en-us', displayedformatOptions);
}

type ReviewProps = {
  review: Review;
};

export default function Review({ review }: ReviewProps) {
  return (
    <li className="reviews__item">
      <User block={AppBlock.Reviews} user={review.user} />
      <div className="reviews__info">
        <Rating block={AppBlock.Reviews} rating={review.rating} />
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {getDisplayedFormatedDate(review.date)}
        </time>
      </div>
    </li>
  );
}
