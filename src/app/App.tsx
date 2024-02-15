import { Route, Routes } from 'react-router-dom';
import s from './app.module.scss';
import { MainPage } from '../pages/MainPage';

function App() {
  return (
    <div className={s.container}>
      <h1>Working</h1>
      <Routes>
        <Route element={<MainPage />} path="/home" />
      </Routes>
    </div>
  );
}

export default App;
