import s from './Home.module.css';

const Home = () => {
  return (
    <section className={s.section}>
      <div className={s.block_one}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sunt
          debitis, earum quos voluptas neque voluptate molestias dicta libero id{' '}
        </p>
      </div>
      <div className={s.block_two}>
        <img className={s.img} src="photo.png" alt="photo broken" />
      </div>
    </section>
  );
};

export default Home;
