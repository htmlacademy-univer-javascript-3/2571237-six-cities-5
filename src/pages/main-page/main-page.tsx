import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';


export default function MainPage(){
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--index">
        <Cities/>
      </main>
    </div>
  );
}
