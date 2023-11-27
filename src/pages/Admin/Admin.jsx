import { useEffect } from 'react';
import { UseContext } from '../../context/UseContext';
import s from './Admin.module.css';

const Admin = () => {
  const { usersData, getUsersData, deleteUserById } = UseContext();

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <section className={s.section}>
        {usersData.map((el) => (
          <div key={el.id} className={s.block}>
            <h2>id: {el.id}</h2>
            <p>Email: {el.email}</p>
            <button onClick={() => deleteUserById(el.id)}>Delete</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Admin;
