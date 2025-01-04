import {
  ChangeEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { RequestStatus } from '../../constants/request-status';
import { getOffer } from '../../store/offer-data/selectors';
import { getReviewSendingStatus } from '../../store/reviews-data/selectors';
import { dropReviewSendingStatus } from '../../store/reviews-data/reviews-data';
import { ReviewFormSentData } from '../../types/review';
import { RatingStarInput } from './rating-star-input';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

type ReviewFormData = {
  comment: string;
  rating: string;
};

const defaultFormData: ReviewFormData = {
  comment: '',
  rating: '',
};

const ratingStars = Array.from({ length: 5 }, (_, i) => String(5 - i));

function validateReview({ comment, rating }: ReviewFormData) {
  return (
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    !Number.isNaN(rating)
  );
}

export default function ReviewForm() {
  const dispatch = useAppDispatch();
  const { id: offerId } = useAppSelector(getOffer)!;
  const sendingStatus = useAppSelector(getReviewSendingStatus);

  const [formData, setFormData] = useState(defaultFormData);

  const fieldChangedHandler = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const target = evt.target;
      setFormData((data) => ({ ...data, [target.name]: target.value }));
    },
    []
  );

  const submitFormHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const review: ReviewFormSentData = {
      comment: formData.comment,
      rating: +formData.rating,
    };
    dispatch(sendReviewAction({ offerId, review }));
  };

  const reviewValid = validateReview(formData);

  const isSending = sendingStatus === RequestStatus.Pending;

  useEffect(() => {
    if (sendingStatus === RequestStatus.Successful) {
      setFormData(defaultFormData);
      dispatch(dropReviewSendingStatus());
    }
  }, [sendingStatus, dispatch]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={submitFormHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((rating) => (
          <RatingStarInput
            key={rating}
            rating={rating}
            isChecked={rating === formData.rating}
            disabled={isSending}
            onInputChanged={fieldChangedHandler}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangedHandler}
        value={formData.comment}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating </span>
          and describe your stay with at least
          <b className="reviews__text-amount">
            {' '}
            {MIN_COMMENT_LENGTH} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!reviewValid || isSending}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
