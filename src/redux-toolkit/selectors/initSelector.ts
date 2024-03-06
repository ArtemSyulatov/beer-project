import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialApp = (state: RootState) => state.auth;

export const isInitializesSuccess = createSelector(
  [initialApp],
  (initialState) => initialState.initializeSuccess,
);
