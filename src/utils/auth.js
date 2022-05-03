/* eslint-disable prefer-template */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
const { createContext, useContext, useState } = require("react");

const AuthContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/function-component-definition
export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("");
  // eslint-disable-next-line no-shadow
  const login = (token) => {
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const API_URL = process.env.REACT_APP_API_URL;

  fetch(API_URL + "/getData", {
    method: "GET",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((res) => res.json())
    .then((json) => {
      setRole(json.cargo);
    })
    .catch();

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ login, logout, role }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
