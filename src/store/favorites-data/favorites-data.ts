import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/request-status';
import { FavoritesData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';
import {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
} from '../api-actions';

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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesFetchingStatus = RequestStatus.Successful;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const offer = action.payload;
        if (offer.isFavorite) {
          state.favorites.push(offer);
        } else {
          state.favorites = state.favorites.filter(
            (favorite) => favorite.id !== offer.id
          );
        }
      });
  },
});

export const { dropFavorites } = favoritesData.actions;
