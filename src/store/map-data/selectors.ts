import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const getMapSelectedPointId = (state: State) => state[Namespace.Map].selectedPointId;
