import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from './redux';
import { isAuth } from '../redux-toolkit/reducers/isAuthSlice';
import { auth } from '../firebase';
import { isInitializesSuccess } from '../redux-toolkit/selectors/initSelector';

export const useInit = () => {
  const dispatch = useAppDispatch();
  const { initialize, login } = isAuth.actions;
  const initializeSuccess = useAppSelector(isInitializesSuccess);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        dispatch(login(true));
        console.log('uid', uid);
      } else {
        console.log('user is logged out');
      }
      dispatch(initialize(true));
    });
  }, [dispatch, initialize, login]);
  return initializeSuccess;
};
