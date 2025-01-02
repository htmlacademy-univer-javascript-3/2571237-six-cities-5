import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { PropsWithChildren } from 'react';
import { AppRoute } from '../../constants/app-route';
import { useAppSelector } from '../../hooks';
import { getUserAuthStatus } from '../../store/user-data/selectors';

type ProtectedRouteProps = PropsWithChildren<{
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
}>;

export default function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children,
}: ProtectedRouteProps) {
  const authStatus = useAppSelector(getUserAuthStatus);
  return authStatus === restrictedFor ? children : <Navigate to={redirectTo} />;
}
