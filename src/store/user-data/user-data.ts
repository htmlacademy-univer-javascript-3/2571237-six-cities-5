import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { Namespace } from '../../constants/store-namespace';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/app-state';

const initialState: UserData = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
