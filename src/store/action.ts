import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../constants/city-name';

const changeCity = createAction<{city: CityName}>('changeCity');

const fillOffers = createAction('fillOffers');

export { changeCity, fillOffers };
