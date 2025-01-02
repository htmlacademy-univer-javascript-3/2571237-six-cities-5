import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/request-status';
import { ReviewsData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  reviewSendingStatus: RequestStatus.Idle,
};

export const reviewsData = createSlice({
  name: Namespace.Reviews,
  initialState,
  reducers: {
    dropReviewSendingStatus: (state) => {
      state.reviewSendingStatus = RequestStatus.Idle;
    },
    dropReviews: (state) => {
      state.reviews = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.reviewSendingStatus = RequestStatus.Pending;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.reviewSendingStatus = RequestStatus.Successful;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.reviewSendingStatus = RequestStatus.Error;
      });
  }
});

export const { dropReviewSendingStatus, dropReviews } = reviewsData.actions;
