/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/function-component-definition
export const DoesntRequireAuth = ({ children }) => {
  const auth = useAuth();

  if (auth.token) {
    return <Navigate to="/dashboard" />;
  }

  console.log(auth.token);

  return children;
};
