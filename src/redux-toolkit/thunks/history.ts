import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchHistory } from '../../types/SearchHistory';
import {
  addToFirebaseArray,
  readDataFromFirebase,
  removeFromFirebaseArray,
} from '../../firebase/dataActions';

export const fetchHistory = createAsyncThunk(
  'history/fetchHistory',
  async (email: string) => {
    const history = await readDataFromFirebase<SearchHistory>(email, 'history');
    return history;
  },
);

export const addHistoryItem = createAsyncThunk(
  'history/addHistoryItem',
  async ({ email, item }: { email: string; item: SearchHistory }) => {
    await addToFirebaseArray(email, 'history', item);
    return item;
  },
);

export const removeHistoryItem = createAsyncThunk(
  'history/removeHistoryItem',
  async ({ email, item }: { email: string; item: SearchHistory }) => {
    await removeFromFirebaseArray(email, 'history', item);
    return item;
  },
);
