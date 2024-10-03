import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  foundPlacesInAmsterdamCount: number;
}

export default function App({foundPlacesInAmsterdamCount}: AppProps){
  return (
    <MainPage
      foundPlacesInAmsterdamCount={foundPlacesInAmsterdamCount}
    />
  );
}
