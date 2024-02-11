// PrivateRoute.js
import React from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';
import { useAuth } from '../context/ThemeContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth()
  // Add your authentication logic here
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
export default PrivateRoute;