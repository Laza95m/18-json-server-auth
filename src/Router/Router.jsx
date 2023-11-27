import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Logout from '../pages/Logout/Logout';
import { UseContext } from '../context/UseContext';
import Admin from '../pages/Admin/Admin';

const Router = () => {
  const { isAuth, isAdmin } = UseContext();

  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Home />} />
        {isAdmin && <Route path={'/admin'} element={<Admin />} />}
        {isAuth ? (
          <>
            <Route path={'/logout'} element={<Logout />} />
          </>
        ) : (
          <>
            <Route path={'/registration'} element={<Registration />} />
            <Route path={'/login'} element={<Login />} />
          </>
        )}
      </Routes>
    </main>
  );
};

export default Router;
