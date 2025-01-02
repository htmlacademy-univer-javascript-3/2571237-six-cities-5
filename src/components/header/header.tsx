import { ComponentProps } from 'react';
import { useAppSelector } from '../../hooks';
import AuthorizedHeaderNav from './authorized-header-nav';
import HeaderLogo from './header-logo';
import HeaderNav from './header-nav';
import { isUserAuthorized } from '../../store/user-data/selectors';

export default function Header({
  onMainPage,
}: ComponentProps<typeof HeaderLogo>) {
  const authorized = useAppSelector(isUserAuthorized);
  return (
    <HeaderLogo onMainPage={onMainPage}>
      {authorized ? <AuthorizedHeaderNav /> : <HeaderNav />}
    </HeaderLogo>
  );
}
