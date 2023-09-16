import { createContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(Cookies.get("auth_token") ? true : null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
