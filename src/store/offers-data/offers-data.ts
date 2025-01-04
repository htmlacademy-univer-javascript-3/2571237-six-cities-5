import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/request-status';
import { OffersData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  offers: [],
  offersFetchingStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: Namespace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersFetchingStatus = RequestStatus.Successful;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersFetchingStatus = RequestStatus.Error;
      });
  },
});
