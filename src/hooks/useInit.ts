import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from './redux';
import { isAuth } from '../redux-toolkit/reducers/isAuthSlice';
import { auth } from '../firebase';
import { isInitializesSuccess } from '../redux-toolkit/selectors/initSelector';
import { clearUser, setUser } from '../redux-toolkit/reducers/userSlice';

export const useInit = () => {
  const dispatch = useAppDispatch();
  const { initialize, toggleAuth } = isAuth.actions;
  const initializeSuccess = useAppSelector(isInitializesSuccess);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(toggleAuth(true));
        const userData = { uid: user.uid, email: user.email };
        dispatch(setUser(userData));
      } else {
        dispatch(clearUser());
      }
      dispatch(initialize(true));
    });
  }, [dispatch, initialize, toggleAuth]);
  return initializeSuccess;
};
