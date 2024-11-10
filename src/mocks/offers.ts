import { OfferPlaceType } from '../constants/offer-place-type';
import { City } from '../types/offer/city';
import { Offer } from '../types/offer/offer';

const amsterdam: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

export const offers: Offer[] = [
  {
    id: '0',
    title: 'Beautiful & luxurious apartment at great location',
    type: OfferPlaceType.Apartment,
    price: 120,
    city: amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: '../../markup/img/apartment-01.jpg'
  },
  {
    id: '1',
    title: 'Wood and stone place',
    type: OfferPlaceType.Room,
    price: 80,
    city: amsterdam,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: '../../markup/img/room.jpg'
  },
  {
    id: '2',
    title: 'Canal View Prinsengracht',
    type: OfferPlaceType.Apartment,
    price: 132,
    city: amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: '../../markup/img/apartment-02.jpg'
  },
  {
    id: '3',
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferPlaceType.Apartment,
    price: 180,
    city: amsterdam,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: '../../markup/img/apartment-03.jpg'
  }
];
