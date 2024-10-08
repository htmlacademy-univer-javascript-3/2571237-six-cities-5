import { ComponentProps } from 'react';
import MainPage from '../../pages/main-page/main-page';

export default function App({ cityPlacesCards }: ComponentProps<typeof MainPage>){
  return (
    <MainPage
      cityPlacesCards={cityPlacesCards}
    />
  );
}
