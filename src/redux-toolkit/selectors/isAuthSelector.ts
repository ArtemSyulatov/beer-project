import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isAuth = (state: RootState) => state.auth;

export const isAuthSelector = createSelector(
  [isAuth],
  (authState) => authState.auth,
);
