import { useForm } from 'react-hook-form';
import s from './Registration.module.css';
import { UseContext } from '../../context/UseContext';

const Registration = () => {
  const { registerUser } = UseContext();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <>
      <section className={s.section}>
        <h2>Registration Page</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <input {...register('email')} type="email" placeholder="Email" />
          <input
            {...register('password_one')}
            type="password"
            placeholder="Password"
          />
          <input
            {...register('password_two')}
            type="password"
            placeholder="Password"
          />
          <button>Registration</button>
        </form>
      </section>
    </>
  );
};

export default Registration;
