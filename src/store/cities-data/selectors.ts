import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getActiveCity = (state: State) =>
  state[Namespace.Cities].activeCity;
