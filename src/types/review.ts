import { UserData } from './user-data';

export type Reviews = Review[];

export type Review = {
  id: string;
  date: string;
  user: UserData;
  comment: string;
  rating: number;
};

export type ReviewFormData = Pick<Review, 'comment' | 'rating'>;
