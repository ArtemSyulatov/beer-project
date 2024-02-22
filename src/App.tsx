import './app.module.scss';
import { NavBar } from 'components/NavBar/NavBar';
import AppRouter from 'router/AppRouter';

function App() {
  return (
    <div className="container">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
