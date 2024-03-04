import './app.module.scss';
import { NavBar } from 'components/NavBar/NavBar';
import AppRouter from 'router/AppRouter';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { isAuth } from './redux-toolkit/reducers/isAuthSlice';
import { Loader } from './components/ui/Loader/Loader';

function App() {
  const dispatch = useAppDispatch();
  const { initialize, login } = isAuth.actions;
  const { initializeSuccess } = useAppSelector((state) => state.auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        dispatch(login(true));
        console.log('uid', uid);
      } else {
        console.log('user is logged out');
      }
      dispatch(initialize(true));
    });
  }, [dispatch, initialize, login]);
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
