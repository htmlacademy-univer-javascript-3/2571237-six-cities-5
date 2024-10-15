import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/common/app-route';

export default function NotFoundPage() {
  return (
    <div className="page">
      <main className="page__main">
        <div className="container">
          <h1>404</h1>
          <p>Oops! Page Not Found</p>
          <p>It seems the page you&apos;re looking for doesn&apos;t exist.</p>
          <Link to={AppRoute.Main}>Return to Main page</Link>
        </div>
      </main>
    </div>
  );
}
