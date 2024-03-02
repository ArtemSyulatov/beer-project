import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { beerApi } from 'redux-toolkit/services/BeerService';
import { isAuth } from '../reducers/isAuthSlice';
import { beerSlice } from '../reducers/beerSlice';

const rootReducer = combineReducers({
  [beerApi.reducerPath]: beerApi.reducer,
  auth: isAuth.reducer,
  beerSlice: beerSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
