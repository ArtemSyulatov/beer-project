import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToFirebaseArray,
  readDataFromFirebase,
  removeFromFirebaseArray,
} from '../../firebase/dataActions';
import { TransformedBeer } from '../../types/Beer';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (email: string) => {
    const favorites = await readDataFromFirebase<TransformedBeer>(
      email,
      'favorite',
    );
    return favorites;
  },
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async ({ email, beer }: { email: string; beer: TransformedBeer }) => {
    await addToFirebaseArray(email, 'favorite', beer);
    return beer;
  },
);

export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async ({ email, beer }: { email: string; beer: TransformedBeer }) => {
    await removeFromFirebaseArray(email, 'favorite', beer);
    return beer;
  },
);
