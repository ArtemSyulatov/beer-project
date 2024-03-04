import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../hooks/redux';

interface Props {
  children: React.ReactNode;
}

const ProtectedRouteAuth = ({ children }: Props) => {
  const isAuth = useAppSelector((state) => state.auth.auth);
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRouteAuth;
