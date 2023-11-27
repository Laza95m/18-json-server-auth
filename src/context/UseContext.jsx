import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Context = createContext();

export const UseContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(sessionStorage.getItem('email'));
  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem('admin'));

  // ---------------------------------------------------

  const navigate = useNavigate();

  // ---------------------------------------------------

  const URL_PATH = 'http://localhost:3001';

  const registerUser = async (data) => {
    let newUser = {};

    if (data.password_one === data.password_two) {
      newUser = {
        email: data.email,
        password: data.password_one,
      };
    } else return alert('Пароли не совпадают');

    try {
      const res = await axios.post(`${URL_PATH}/register`, newUser);
      alert('Успешно зарегистрирован');
      console.log(res);
      navigate('/login');
    } catch (error) {
      alert('Ошибка при регистрации');
      console.log(error);
    }
  };

  const loginCheck = async (data) => {
    if (data.email === 'admin@gmail.com') {
      sessionStorage.setItem('admin', true);
      setIsAdmin(sessionStorage.getItem('admin'));
    }

    const loginUser = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${URL_PATH}/login`, loginUser);
      alert('Успешно авторизован');
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('token', res.data.accessToken);
      setIsAuth(sessionStorage.getItem('email'));
      navigate('/');
    } catch (error) {
      alert('Ошибка при авторизации');
      console.log(error);
    }
  };

  const logoutPage = () => {
    setIsAuth(false);
    setIsAdmin(false);
    sessionStorage.clear();
    navigate('/');
  };

  // ---------------------------------------------------
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await axios.get(`${URL_PATH}/users`);

      setUsersData(response.data);
    } catch (error) {
      console.log(error);
      alert('Ошибка при получении данных');
    }
  };

  const deleteUserById = async (id) => {
    try {
      await axios.delete(`${URL_PATH}/users/${id}`);

      getUsersData();
    } catch (error) {
      console.log(error);
      alert('Ошибка при удалении аккаунта');
    }
  };

  return (
    <Context.Provider
      value={{
        registerUser,
        loginCheck,
        logoutPage,
        isAuth,
        isAdmin,
        usersData,
        getUsersData,
        deleteUserById,
      }}
    >
      {children}
    </Context.Provider>
  );
};
