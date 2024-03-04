import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isAuthSelector = (state: RootState) => state.auth;

export const getIsAuth = createSelector(
  [isAuthSelector],
  (authState) => authState.auth,
);
