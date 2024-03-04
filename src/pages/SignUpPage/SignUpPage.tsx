import React, { FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import { useAuthData } from '../../hooks/useAuthData';

const SignupPage = () => {
  const navigate = useNavigate();
  const { email, password, setPassword, setEmail } = useAuthData();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
