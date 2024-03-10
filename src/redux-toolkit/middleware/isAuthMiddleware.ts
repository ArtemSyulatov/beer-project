import { createListenerMiddleware } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AppDispatch, RootState } from '../store';
import { toggleAuth } from '../reducers/isAuthSlice';

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();
startAppListening({
  actionCreator: toggleAuth,
  effect: (action, api) => {
    if (!api.getState().auth.auth) {
      toast.success(`Logging Out!`);
    }
    if (api.getState().auth.auth && !api.getState().auth.initializeSuccess) {
      toast.success('Login successful!');
    }
  },
});
