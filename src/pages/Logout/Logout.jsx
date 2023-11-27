import { UseContext } from '../../context/UseContext';
import s from './Logout.module.css';

const Logout = () => {
  const { logoutPage } = UseContext();

  return (
    <section className={s.section}>
      <h2>Logout Page</h2>
      <button onClick={() => logoutPage()}>Logout</button>
    </section>
  );
};

export default Logout;
