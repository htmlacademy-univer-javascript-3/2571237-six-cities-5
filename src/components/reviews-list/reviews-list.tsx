import Review from './review';

export default function ReviewsList(){
  return (
    <ul className="reviews__list">
      {<Review />}
    </ul>
  );
}
