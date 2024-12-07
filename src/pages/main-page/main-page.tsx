import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import HeaderBase from '../../components/header/header-base';
import HeaderNav from '../../components/header/header-nav';


export default function MainPage(){
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <HeaderBase>
        <HeaderNav/>
      </HeaderBase>

      <main className="page__main page__main--index">
        <Cities/>
      </main>
    </div>
  );
}
