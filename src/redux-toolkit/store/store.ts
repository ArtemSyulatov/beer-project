import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { beerApi } from 'redux-toolkit/services/BeerService';
import { isAuth } from '../reducers/isAuthSlice';
import { beerSlice } from '../reducers/beerSlice';
import { favoriteSlice } from '../reducers/favouritesSlice';
import { userSlice } from '../reducers/userSlice';
import { historySlice } from '../reducers/historySlice';
import { listenerMiddleware } from '../middleware/isAuthMiddleware';

const rootReducer = combineReducers({
  [beerApi.reducerPath]: beerApi.reducer,
  auth: isAuth.reducer,
  beerSlice: beerSlice.reducer,
  favorites: favoriteSlice.reducer,
  user: userSlice.reducer,
  history: historySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(beerApi.middleware)
      .concat(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
