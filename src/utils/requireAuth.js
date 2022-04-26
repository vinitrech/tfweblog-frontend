/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import { Navigate } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/function-component-definition

export const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const RequireNoAuth = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
