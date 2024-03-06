import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const isAuth = createSlice({
  name: 'isAuth',
  initialState: {
    auth: false,
    initializeSuccess: false,
  },
  reducers: {
    toggleAuth(state, { payload: auth }: PayloadAction<boolean>) {
      state.auth = auth;
    },
    initialize(state, { payload: initializeSuccess }: PayloadAction<boolean>) {
      state.initializeSuccess = initializeSuccess;
    },
  },
});

export const { toggleAuth, initialize } = isAuth.actions;
