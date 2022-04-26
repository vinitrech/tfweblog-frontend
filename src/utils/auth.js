/* eslint-disable react/prop-types */
const { createContext, useContext } = require("react");

const AuthContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/function-component-definition
export const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-shadow
  const login = (token) => {
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
