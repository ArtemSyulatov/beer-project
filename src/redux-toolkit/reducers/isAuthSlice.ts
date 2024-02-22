import { createSlice } from '@reduxjs/toolkit';

export const isAuth = createSlice({
  name: 'isAuth',
  initialState: {
    auth: false,
  },
  reducers: {
    login(state, action) {
      return { auth: action.payload };
    },
    logout(state, action) {
      return { auth: action.payload };
    },
  },
});

export const { login, logout } = isAuth.actions;
export default isAuth.reducer;
