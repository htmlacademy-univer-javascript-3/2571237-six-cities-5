import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getReviews = (state: State) =>
  state[Namespace.Reviews].reviews;

export const getReviewSendingStatus = (state: State) =>
  state[Namespace.Reviews].reviewSendingStatus;
