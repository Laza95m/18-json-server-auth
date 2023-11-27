import { UseContext } from '../../context/UseContext';
import { useForm } from 'react-hook-form';
import s from './Login.module.css';

const Login = () => {
  const { loginCheck } = UseContext();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginCheck(data);
  };

  return (
    <section className={s.section}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input {...register('email')} type="email" placeholder="Email" />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
