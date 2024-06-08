import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;