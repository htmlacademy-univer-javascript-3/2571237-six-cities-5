import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName } from '../../constants/city-name';
import { CitiesData } from '../../types/app-state';
import { Namespace } from '../../constants/store-namespace';

const initialState: CitiesData = {
  activeCity: CityName.Paris,
};

export const citiesData = createSlice({
  name: Namespace.Cities,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<CityName>) => {
      state.activeCity = action.payload;
    },
  },
});

export const { setActiveCity } = citiesData.actions;
