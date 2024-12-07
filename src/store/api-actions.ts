import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/app-state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/api-route';
import { Offers } from '../types/offer/offer';
import { loadOffers, setOffersDataLoadingStatus } from './actions';

type ThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

const fetchOffersAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export { fetchOffersAction };
