import { createContext, useContext, useState } from "react";


export const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [access, setAccess] = useState(ACCESS_TOKEN);

  return <AuthContext.Provider value={
    {
      access,
      setAccess
    }
  }>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
