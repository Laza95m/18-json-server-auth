import s from './App.module.css';
import Router from './Router/Router';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <div className={s.app}>
        <Header />
        <Router />
      </div>
    </>
  );
};

export default App;
