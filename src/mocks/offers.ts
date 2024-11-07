import { PlaceType } from '../constants/place-type';
import { Offer } from '../types/offer';


export const offers: Offer[] = [
  {
    id: 0,
    placeCard: {
      isPremium: true,
      imageSrc: '../../markup/img/apartment-01.jpg',
      info: {
        price: 120,
        inFavorites: false,
        rating: 4,
        name: 'Beautiful & luxurious apartment at great location',
        type: PlaceType.Apartment
      }
    }
  },
  {
    id: 1,
    placeCard: {
      isPremium: false,
      imageSrc: '../../markup/img/room.jpg',
      info: {
        price: 80,
        inFavorites: true,
        rating: 4,
        name: 'Wood and stone place',
        type: PlaceType.Room
      }
    }
  },
  {
    id: 2,
    placeCard: {
      isPremium: false,
      imageSrc: '../../markup/img/apartment-02.jpg',
      info: {
        price: 132,
        inFavorites: false,
        rating: 4,
        name: 'Canal View Prinsengracht',
        type: PlaceType.Apartment
      }
    }
  },
  {
    id: 3,
    placeCard: {
      isPremium: true,
      imageSrc: '../../markup/img/apartment-03.jpg',
      info: {
        price: 180,
        inFavorites: false,
        rating: 5,
        name: 'Nice, cozy, warm big bed apartment',
        type: PlaceType.Apartment
      }
    }
  }
];
