import { useState } from 'react';

export const useAuthData = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return { email, password, setEmail, setPassword };
};
