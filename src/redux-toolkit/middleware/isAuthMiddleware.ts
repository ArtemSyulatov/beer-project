import { createListenerMiddleware } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { clearUser, setUser } from '../reducers/userSlice';
import { AppDispatch, RootState } from '../store';

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

startAppListening({
  actionCreator: clearUser,
  effect: () => {
    toast.success(`Logging Out!`);
  },
});
startAppListening({
  actionCreator: setUser,
  effect: () => {
    toast.success('Login successful!');
  },
});
