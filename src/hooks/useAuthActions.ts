import { useAppDispatch, useAppSelector } from './redux';
import {
  selectUser,
  selectUserLoading,
} from '../redux-toolkit/selectors/getUser';
import { loginUser, logoutUser, registerUser } from '../firebase/authDb';
import { clearUser, setUser } from '../redux-toolkit/reducers/userSlice';
import { clearFavorites } from '../redux-toolkit/reducers/favouritesSlice';

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectUserLoading);
  const register = async (email: string, password: string) => {
    const user = await registerUser(email, password);
    if (user) {
      dispatch(setUser({ uid: user.uid, email: user.email }));
    }
  };

  const login = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    if (user) {
      dispatch(setUser({ uid: user.uid, email: user.email }));
    }
    return user;
  };
  const logout = async () => {
    await logoutUser();
    dispatch(clearUser());
    dispatch(clearFavorites());
  };

  return { user, loading, register, login, logout };
};
