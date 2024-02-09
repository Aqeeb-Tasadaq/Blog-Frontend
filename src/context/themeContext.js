// AuthContext.js
import { createContext, useContext, useReducer, useState } from 'react';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null
};

// Action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
  
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};