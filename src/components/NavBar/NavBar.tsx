import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import s from './NavBar.module.scss';
import logo from '../../assets/imgs/beer-logo2.png';
import { isAuth } from '../../redux-toolkit/reducers/isAuthSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button } from '../ui/Button/Button';
import { SearchBar } from '../SearchBar/SearchBar';
import { auth } from '../../firebase';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const isAuthNow = useAppSelector((state) => state.auth.auth);
  const { login } = isAuth.actions;
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        dispatch(login(false));
        console.log('Signed out successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
