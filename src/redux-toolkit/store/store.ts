import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { beerApi } from 'redux/services/BeerService';

const rootReducer = combineReducers({
  [beerApi.reducerPath]: beerApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
