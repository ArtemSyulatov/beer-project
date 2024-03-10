import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const beerSelector = (state: RootState) => state.beerSlice;

export const getPerPage = createSelector(
  [beerSelector],
  (beerState) => beerState.perPage,
);

export const getSearchValue = createSelector(
  [beerSelector],
  (beerState) => beerState.searchValue,
);
