import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { PropsWithChildren } from 'react';
import { AppRoute } from '../../constants/app-route';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

export default function PrivateRoute({ authorizationStatus, children }: PropsWithChildren<PrivateRouteProps>) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
