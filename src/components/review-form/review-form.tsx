import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import RatingStarInput from './rating-star-input';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { ReviewFormData } from '../../types/review';
import { RequestStatus } from '../../constants/request-status';
import { clearReviewSendingStatus } from '../../store/actions';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

const defaultFormData = {
  rating: '',
  review: '',
};

const ratingStars = Array.from({ length: 5 }, (_, i) => String(5 - i));

export default function ReviewForm() {
  const dispatch = useAppDispatch();
  const offerId = useAppSelector((state) => state.offer?.id)!;
  const sendingStatus = useAppSelector((state) => state.reviewSendingStatus);

  const [formData, setFormData] = useState(defaultFormData);

  const fieldChangedHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (evt) => {
    const target = evt.target;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submitFormHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const review: ReviewFormData = {
      comment: formData.review,
      rating: +formData.rating,
    };

    dispatch(sendReviewAction({ offerId, review }));
  };

  const reviewValid =
    formData.review.length >= MIN_REVIEW_LENGTH &&
    formData.review.length <= MAX_REVIEW_LENGTH &&
    formData.rating !== '';

  const isSending = sendingStatus === RequestStatus.Pending;

  useEffect(() => {
    if (sendingStatus === RequestStatus.Successful) {
      setFormData(defaultFormData);
      dispatch(clearReviewSendingStatus());
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangedHandler}
        value={formData.review}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating </span>
          and describe your stay with at least
          <b className="reviews__text-amount">
            {' '}
            {MIN_REVIEW_LENGTH} characters
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
