import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities - not found</title>
      </Helmet>
      <main className="page__main">
        <div className="container">
          <h1>404</h1>
          <p>Oops! Page Not Found</p>
          <p>It seems the page you&apos;re looking for doesn&apos;t exist.</p>
          <Link to={AppRoute.Main}>Return to main page</Link>
        </div>
      </main>
    </div>
  );
}
