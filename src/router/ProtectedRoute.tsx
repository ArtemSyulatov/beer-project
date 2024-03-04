import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../hooks/redux';
import { getIsAuth } from '../redux-toolkit/selectors/getIsAuth';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuth = useAppSelector(getIsAuth);
  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
