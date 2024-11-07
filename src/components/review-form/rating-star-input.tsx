import { ChangeEventHandler } from 'react';

const titles: Record<string, string> = {
  ['5']: 'perfect',
  ['4']: 'good',
  ['3']: 'not bad',
  ['2']: 'badly',
  ['1']: 'terribly'
};

type RatingStarInputProps = {
  rating: string;
  isChecked: boolean;
  onInputChanged: ChangeEventHandler<HTMLInputElement>;
}

export default function RatingStarInput({rating, isChecked, onInputChanged}: RatingStarInputProps) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio"
        onChange={onInputChanged} checked={isChecked}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={titles[rating]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}