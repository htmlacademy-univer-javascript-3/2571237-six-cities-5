import { ChangeEventHandler, useState } from 'react';
import RatingStarInput from './rating-star-input';

const starsRatings = Array.from({length: 5}, (_, i) => String(5 - i));

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    'rating': '',
    'review': ''
  });

  const fieldChangedHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const target = evt.target;
    setFormData({...formData, [target.name]: target.value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          starsRatings.map((starRating) => (
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
      >
        {formData.review}
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
