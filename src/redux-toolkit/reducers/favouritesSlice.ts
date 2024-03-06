import { createSlice } from '@reduxjs/toolkit';
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from '../thunks/favourite';
import { TransformedBeer } from '../../types/Beer';

interface FavoriteState {
  items: TransformedBeer[];
  loading: boolean;
  isFavoriteFetching: boolean;
}

const initialState: FavoriteState = {
  items: [],
  loading: true,
  isFavoriteFetching: false,
};

export const favoriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    clearFavorites: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.isFavoriteFetching = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.isFavoriteFetching = false;
      })
      .addCase(addFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(removeFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
        state.loading = false;
      });
  },
});

export const { clearFavorites } = favoriteSlice.actions;
