import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PlaceType } from './pages/main-page/constants/place-type';
import { CityPlaceCard } from './components/app/city-place-card';

const cityPlacesCards: Array<CityPlaceCard> = [
  {
    id: 0,
    card: {
      isPremium: true,
      imageSrc: '../../markup/img/apartment-01.jpg',
      info: {
        priceInEuro: 120,
        inBookmarks: false,
        ratingInPercentage: 80,
        name: 'Beautiful & luxurious apartment at great location',
        type: PlaceType.Apartment
      }
    }
  },
  {
    id: 1,
    card: {
      isPremium: false,
      imageSrc: '../../markup/img/room.jpg',
      info: {
        priceInEuro: 80,
        inBookmarks: true,
        ratingInPercentage: 80,
        name: 'Wood and stone place',
        type: PlaceType.Room
      }
    }
  },
  {
    id: 2,
    card: {
      isPremium: false,
      imageSrc: '../../markup/img/apartment-02.jpg',
      info: {
        priceInEuro: 132,
        inBookmarks: false,
        ratingInPercentage: 80,
        name: 'Canal View Prinsengracht',
        type: PlaceType.Apartment
      }
    }
  },
  {
    id: 3,
    card: {
      isPremium: true,
      imageSrc: '../../markup/img/apartment-03.jpg',
      info: {
        priceInEuro: 180,
        inBookmarks: false,
        ratingInPercentage: 100,
        name: 'Nice, cozy, warm big bed apartment',
        type: PlaceType.Apartment
      }
    }
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cityPlacesCards={cityPlacesCards}
    />
  </React.StrictMode>
);
