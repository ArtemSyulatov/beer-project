import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';

export const NavBar = () => (
  <div className={s.navbar}>
    <div className={s.navbar__links}>
      <NavLink className={s.link} to="/some">
        HOME
      </NavLink>
      <NavLink className={s.link} to="/">
        MAIN
      </NavLink>
    </div>
  </div>
);
