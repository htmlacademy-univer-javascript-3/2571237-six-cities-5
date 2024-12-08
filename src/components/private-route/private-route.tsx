import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { ReactNode } from 'react';
import { AppRoute } from '../../constants/app-route';
import { useAppSelector } from '../../hooks';


export default function PrivateRoute({ children }: { children?: ReactNode }) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
