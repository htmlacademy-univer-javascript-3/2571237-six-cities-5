import { ComponentProps } from 'react';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { useAppSelector } from '../../hooks';
import AuthorizedHeaderNav from './authorized-header-nav';
import HeaderLogo from './header-logo';
import HeaderNav from './header-nav';

export default function Header({
  onMainPage,
}: ComponentProps<typeof HeaderLogo>) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <HeaderLogo onMainPage={onMainPage}>
      {authStatus === AuthorizationStatus.Auth ? (
        <AuthorizedHeaderNav />
      ) : (
        <HeaderNav />
      )}
    </HeaderLogo>
  );
}
