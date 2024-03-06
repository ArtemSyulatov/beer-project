import React, { FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../hooks/redux';
import { isAuth } from '../../redux-toolkit/reducers/isAuthSlice';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import { useInputData } from '../../hooks/useInputData';
import { useAuthActions } from '../../hooks/useAuthActions';

const SignInPage = () => {
  const navigate = useNavigate();
  const { email, password, setPassword, setEmail } = useInputData();
  const dispatch = useAppDispatch();
  const { toggleAuth } = isAuth.actions;
  const { login } = useAuthActions();
  const { initialize } = isAuth.actions;
  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(initialize(false));
    const user = await login(email, password);
    try {
      if (user) {
        navigate('/');
        dispatch(toggleAuth(true));
      }
    } catch (error) {
      toast.error(error);
    }
    dispatch(initialize(true));
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
