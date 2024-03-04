import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const isAuth = createSlice({
  name: 'isAuth',
  initialState: {
    auth: false,
    initializeSuccess: false,
  },
  reducers: {
    login(state, action: PayloadAction<boolean>) {
      state.auth = action.payload;
    },
    initialize(state, action: PayloadAction<boolean>) {
      state.initializeSuccess = action.payload;
    },
  },
});

export const { login, initialize } = isAuth.actions;
export default isAuth.reducer;
