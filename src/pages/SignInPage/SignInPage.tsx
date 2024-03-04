import React, { FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux';
import { isAuth } from '../../redux-toolkit/reducers/isAuthSlice';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import { useAuthData } from '../../hooks/useAuthData';

const SignInPage = () => {
  const navigate = useNavigate();
  const { email, password, setPassword, setEmail } = useAuthData();
  const dispatch = useAppDispatch();
  const { login } = isAuth.actions;
  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch(login(true));
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="form">
      <form onSubmit={onLogin}>
        <div>
          <Input
            id="email-address"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            id="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button>Sign in</Button>
        </div>
      </form>
      <p>
        Нет аккаунта? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
};

export default SignInPage;
