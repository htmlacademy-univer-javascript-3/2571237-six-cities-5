import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getFavorites = (state: State) =>
  state[Namespace.Favorite].favorites;

export const getFavoriteFetchingStatus = (state: State) =>
  state[Namespace.Favorite].favoritesFetchingStatus;

export const getFavoritesCount = (state: State) =>
  state[Namespace.Favorite].favorites.length;
