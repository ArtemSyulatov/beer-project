import React, { FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import { useInputData } from '../../hooks/useInputData';
import { useAuthActions } from '../../hooks/useAuthActions';
import { useAppSelector } from '../../hooks/redux';
import { selectUser } from '../../redux-toolkit/selectors/getUser';

const SignupPage = () => {
  const navigate = useNavigate();
  const { email, password, setPassword, setEmail } = useInputData();
  const { register } = useAuthActions();
  const user = useAppSelector(selectUser);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(email, password);
    if (user) {
      navigate('/signin');
    }
  };
  return (
    <div className="form">
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <Button>Sign up</Button>
        </form>
        <p>
          Уже есть аккаунт? <NavLink to="/signin">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
