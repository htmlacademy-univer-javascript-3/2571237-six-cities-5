import { createSlice } from '@reduxjs/toolkit';
import { NearPlacesData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';
import { fetchNearPlacesAction } from '../api-actions';

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
    builder.addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    });
  },
});

export const { dropNearPlaces } = nearPlacesData.actions;
