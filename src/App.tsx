import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import s from './app.module.scss';
import { MainPage } from '../pages/MainPage';
import { HomePage } from '../pages/HomePage';

function App() {
  return (
    <div className={s.container}>
      <h1>Working</h1>
      <Link to="/main">Главная страница</Link>
      <Link to="/">Домашнаяя страница</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route element={<HomePage />} path="/home" />
          <Route element={<MainPage />} path="/" />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
