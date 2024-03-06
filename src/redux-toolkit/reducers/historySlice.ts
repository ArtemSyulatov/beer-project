import { createSlice } from '@reduxjs/toolkit';
import { SearchHistory } from '../../types/SearchHistory';
import {
  addHistoryItem,
  fetchHistory,
  removeHistoryItem,
} from '../thunks/history';

interface HistoryState {
  items: SearchHistory[];
  loading: boolean;
  isHistoryFetching: boolean;
}

const initialState: HistoryState = {
  items: [],
  loading: false,
  isHistoryFetching: false,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.isHistoryFetching = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isHistoryFetching = false;
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.isHistoryFetching = false;
      })
      .addCase(addHistoryItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addHistoryItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addHistoryItem.rejected, (state) => {
        state.loading = false;
      })
      .addCase(removeHistoryItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeHistoryItem.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) =>
            item.date !== action.payload.date ||
            item.name !== action.payload.name,
        );
        state.loading = false;
      })
      .addCase(removeHistoryItem.rejected, (state) => {
        state.loading = false;
      });
  },
});
