import { AppBlock } from '../../constants/app-block';

function convertRatingToWidthInPercent(rating: number){
  return Math.round(rating) * 20;
}

type RatingProps = {
  block: AppBlock;
  rating: number;
}

export default function Rating({ block, rating }: RatingProps) {
  return (
    <div className={`${block}__rating rating`}>
      <div className={`${block}__stars rating__stars`}>
        <span style={{ width: `${convertRatingToWidthInPercent(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
