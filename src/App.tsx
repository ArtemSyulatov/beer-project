import './app.module.scss';
import { NavBar } from 'components/NavBar/NavBar';
import AppRouter from 'router/AppRouter';
import { Loader } from './components/ui/Loader/Loader';
import { useInit } from './hooks/useInit';

function App() {
  const initializeSuccess = useInit();
  if (!initializeSuccess) {
    return (
      <div className="mainPageLoader">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
