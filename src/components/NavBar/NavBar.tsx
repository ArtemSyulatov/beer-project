import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';
import logo from '../../assets/imgs/beer-logo2.png';

export const NavBar = () => (
  <header className={s.navbar}>
    <div className={s.navbar__links}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="beer-logo" />
      </NavLink>
      <div>
        <NavLink className={s.link} to="/some">
          Sign up
        </NavLink>
        <NavLink className={s.link} to="/some">
          Sign in
        </NavLink>
      </div>
    </div>
  </header>
);
