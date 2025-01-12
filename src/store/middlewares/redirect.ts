import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';
import browserHistory from '../../common/browser-history';
import { redirectToRoute } from '../actions';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === redirectToRoute.toString()) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
