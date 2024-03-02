import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';
import logo from '../../assets/imgs/beer-logo2.png';
import { isAuth } from '../../redux-toolkit/reducers/isAuthSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button } from '../ui/Button/Button';
import { SearchBar } from '../SearchBar/SearchBar';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const isAuthNow = useAppSelector((state) => state.auth.auth);
  const { login, logout } = isAuth.actions;
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
            <div>
              <Button onClick={() => dispatch(logout(false))} type="button">
                Logout
              </Button>
              <NavLink className={s.link} to="/history">
                History
              </NavLink>
              <NavLink className={s.link} to="/favorites">
                Favorites beers
              </NavLink>
            </div>
          ) : (
            <div>
              <Button onClick={() => dispatch(login(true))} type="button">
                Login
              </Button>
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
