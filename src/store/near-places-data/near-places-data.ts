import { createSlice } from '@reduxjs/toolkit';
import { NearPlacesData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';
import {
  changeFavoriteStatusAction,
  fetchNearPlacesAction,
} from '../api-actions';
import { UpdateOfferPreviewItemInList } from '../../utils/offer-utils';

const initialState: NearPlacesData = {
  nearPlaces: [],
};

export const nearPlacesData = createSlice({
  name: Namespace.NearPlaces,
  initialState,
  reducers: {
    dropNearPlaces: (state) => {
      state.nearPlaces = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        UpdateOfferPreviewItemInList(state.nearPlaces, action.payload);
      });
  },
});

export const { dropNearPlaces } = nearPlacesData.actions;
