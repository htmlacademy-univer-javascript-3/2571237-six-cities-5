import { User } from './user';

export type Reviews = Review[];

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type ReviewFormSentData = Pick<Review, 'comment' | 'rating'>;
