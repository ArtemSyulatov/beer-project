import { createListenerMiddleware } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { clearUser, setUser } from '../reducers/userSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: clearUser,
  effect: () => {
    toast.success(`Logging Out!`);
  },
});

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: () => {
    toast.success('Login successful!');
  },
});
