import { AuthorizationStatus } from '../../constants/authorization-status';
import { useAppSelector } from '../../hooks';
import AuthorizedHeaderNav from './authorized-header-nav';
import HeaderBase from './header-base';
import HeaderNav from './header-nav';

export default function Header() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <HeaderBase>
      {authStatus === AuthorizationStatus.Auth ? <AuthorizedHeaderNav/> : <HeaderNav/>}
    </HeaderBase>
  );
}
