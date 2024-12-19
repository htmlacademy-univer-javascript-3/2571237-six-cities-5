import { ChangeEventHandler, useState } from 'react';
import RatingStarInput from './rating-star-input';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

const ratingStars = Array.from({length: 5}, (_, i) => String(5 - i));

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    'rating': '',
    'review': ''
  });

  const fieldChangedHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const target = evt.target;
    setFormData({...formData, [target.name]: target.value});
  };

  const reviewValid =
    formData.review.length >= MIN_REVIEW_LENGTH &&
    formData.review.length <= MAX_REVIEW_LENGTH &&
    formData.rating !== '';

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingStars.map((starRating) => (
            <RatingStarInput
              key={starRating}
              rating={starRating}
              isChecked={starRating === formData.rating}
              onInputChanged={fieldChangedHandler}
            />))
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangedHandler}
        defaultValue={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating </span>
          and describe your stay with at least
          <b className="reviews__text-amount"> {MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!reviewValid}>Submit</button>
      </div>
    </form>
  );
}
