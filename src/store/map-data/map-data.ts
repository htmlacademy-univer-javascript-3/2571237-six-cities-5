import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Namespace } from '../../constants/store-namespace';
import { MapData } from '../../types/app-state';
import { MapPoint } from '../../types/map-point';

const initialState: MapData = {
  selectedPointId: null,
};

export const mapProcess = createSlice({
  name: Namespace.Map,
  initialState,
  reducers: {
    setMapSelectedPointId: (state, action: PayloadAction<MapPoint['id']>) => {
      state.selectedPointId = action.payload;
    },
    dropMapSelectedPointId: (state) => {
      state.selectedPointId = null;
    }
  },
});

export const { setMapSelectedPointId, dropMapSelectedPointId } = mapProcess.actions;
