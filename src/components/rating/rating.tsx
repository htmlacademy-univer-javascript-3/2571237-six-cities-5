import { PropsWithChildren } from 'react';
import { AppBlock } from '../../constants/app-block';

function convertRatingToWidthInPercent(rating: number){
  return Math.round(rating) * 20;
}

type RatingBlock = AppBlock.OfferCard | AppBlock.Offer | AppBlock.Reviews;

type RatingProps = PropsWithChildren & {
  block: RatingBlock;
  rating: number;
}

export default function Rating({ block, rating, children }: RatingProps) {
  return (
    <div className={`${block}__rating rating`}>
      <div className={`${block}__stars rating__stars`}>
        <span style={{ width: `${convertRatingToWidthInPercent(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}
