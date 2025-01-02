import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getNearPlaces = (state: State) => state[Namespace.NearPlaces].nearPlaces;
