import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const isAuth = createSlice({
  name: 'isAuth',
  initialState: {
    auth: false,
    initializeSuccess: false,
  },
  reducers: {
    login(state, { payload: auth }: PayloadAction<boolean>) {
      state.auth = auth;
    },
    initialize(state, { payload: initializeSuccess }: PayloadAction<boolean>) {
      state.initializeSuccess = initializeSuccess;
    },
  },
});

export const { login, initialize } = isAuth.actions;
