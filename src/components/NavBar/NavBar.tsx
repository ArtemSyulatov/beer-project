import { NavLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import s from './NavBar.module.scss';
import logo from '../../assets/imgs/beer-logo2.png';
import { isAuth } from '../../redux-toolkit/reducers/isAuthSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button } from '../ui/Button/Button';
import { SearchBar } from '../SearchBar/SearchBar';
import { getIsAuth } from '../../redux-toolkit/selectors/getIsAuth';
import { useAuthActions } from '../../hooks/useAuthActions';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const isAuthNow = useAppSelector(getIsAuth);
  const { toggleAuth } = isAuth.actions;
  const navigate = useNavigate();
  const { logout } = useAuthActions();
  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
    dispatch(toggleAuth(false));
  }, [dispatch, logout, navigate, toggleAuth]);
  return (
    <header className={s.navbar}>
      <div className={s.navbar__links}>
        <NavLink to="/">
          <img className={s.logo} src={logo} alt="beer-logo" />
        </NavLink>
        <div className={s.searchWidget}>
          <SearchBar />
        </div>
        <div>
          {isAuthNow ? (
            <div className={s.rightSide}>
              <div>
                <NavLink className={s.link} to="/history">
                  History
                </NavLink>
                <NavLink className={s.link} to="/favorites">
                  Favorites beers
                </NavLink>
              </div>
              <Button onClick={handleLogout} type="button">
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <NavLink className={s.link} to="/signup">
                Sign up
              </NavLink>
              <NavLink className={s.link} to="/signin">
                Sign in
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
