import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants/app-route';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
