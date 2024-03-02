import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  perPage: number;
  searchValue: string;
}

export const beerSlice = createSlice({
  name: 'beerSlice',
  initialState: {
    perPage: 10,
    searchValue: '',
  },
  reducers: {
    setSearchValue(
      state,
      {
        payload: { searchValue },
      }: PayloadAction<Pick<SearchState, 'searchValue'>>,
    ) {
      state.searchValue = searchValue;
    },
    setPerPage(
      state,
      { payload: { perPage } }: PayloadAction<Pick<SearchState, 'perPage'>>,
    ) {
      state.perPage = perPage;
    },
  },
});

export const { setSearchValue } = beerSlice.actions;
export default beerSlice.reducer;
