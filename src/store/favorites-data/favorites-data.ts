import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/request-status';
import { FavoritesData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';
import { fetchFavoritesAction } from '../api-actions';
import { OfferPreview } from '../../types/offer/offer';

const initialState: FavoritesData = {
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: Namespace.Favorite,
  initialState,
  reducers: {
    dropFavorites: (state) => {
      state.favorites = [];
      state.favoritesFetchingStatus = RequestStatus.Idle;
    },
    deleteFavorite: (state, action: PayloadAction<OfferPreview>) => {
      state.favorites = state.favorites.filter(
        (offer) => offer.id !== action.payload.id
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesFetchingStatus = RequestStatus.Successful;
      });
  },
});

export const { dropFavorites, deleteFavorite } = favoritesData.actions;
