import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(Cookies.get("auth_token") ? true : null);

  const updateAuthFromCookie = () => {
    setAuth(Cookies.get("auth_token") ? true : null);
  };

  useEffect(() => {
    updateAuthFromCookie();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, updateAuthFromCookie }}>
      {children}
    </AuthContext.Provider>
  );
};
