/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import { Navigate } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/function-component-definition

function verificaToken() {
  const API_URL = process.env.REACT_APP_API_URL;
  fetch(API_URL + "/dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        return <Navigate to="/login" />;
      }
    })
    .catch();
}

export const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  verificaToken();

  return children;
};

export const RequireNoAuth = ({ children }) => {
  verificaToken();
  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
