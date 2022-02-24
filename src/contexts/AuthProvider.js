import { createContext, useContext, useLayoutEffect, useState } from "react";
import { accessTokenRemove } from "utils/LocalStorageUtil";
import axios from "axios";

export const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [access, setAccess] = useState(ACCESS_TOKEN);

  useLayoutEffect(() => {
    if (ACCESS_TOKEN !== null) {
      const isVerifyToken = async () => {
        try {
          await axios.get("/api/auth/verify", {
            headers: {
              authorization: ACCESS_TOKEN,
            },
          });
        } catch (error) {
          accessTokenRemove();
          setAccess(null);
        }
      };
      isVerifyToken();
    }
  }, [ACCESS_TOKEN]);

  return (
    <AuthContext.Provider
      value={{
        access,
        setAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
