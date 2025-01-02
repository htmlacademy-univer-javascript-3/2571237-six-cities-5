import { AuthorizationStatus } from '../../constants/authorization-status';
import { Namespace } from '../../constants/store-namespace';
import { State } from '../../types/app-state';

export const isUserAuthorized = (state: State) =>
  state[Namespace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getUserAuthStatus = (state: State) => state[Namespace.User].authorizationStatus;

export const getUserName = (state: State) => state[Namespace.User].user?.email;
