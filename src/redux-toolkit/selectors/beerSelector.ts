import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const beer = (state: RootState) => state.beerSlice;

export const beerSelector = createSelector(
  [beer],
  (authState) => authState.perPage,
);
