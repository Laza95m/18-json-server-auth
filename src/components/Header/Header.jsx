import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { UseContext } from '../../context/UseContext';

const Header = () => {
  const { isAuth, isAdmin } = UseContext();

  return (
    <>
      <header>
        <nav className={s.nav}>
          <ul className={s.ul}>
            <li className={s.li}>
              <NavLink to={'/'}>Home</NavLink>
            </li>
          </ul>
          <ul className={s.ul}>
            <li className={s.li}>
              {isAdmin && <NavLink to={'/admin'}>Admin</NavLink>}
              {isAuth ? (
                <>
                  <NavLink to={'/logout'}>Logout</NavLink>
                </>
              ) : (
                <>
                  <NavLink to={'/registration'}>Registration</NavLink>
                  <NavLink to={'/login'}>Login</NavLink>
                </>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
