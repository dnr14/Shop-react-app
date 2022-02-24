import { useAuthContext } from "contexts/AuthProvider";
import { useCallback } from "react";
import { accessTokenRemove } from "utils/LocalStorageUtil";

const useLogout = () => {
  const { setAccess } = useAuthContext();

  const logout = useCallback(() => {
    accessTokenRemove();
    setAccess(null);
  }, [setAccess]);
  return { logout };
};

export default useLogout;
