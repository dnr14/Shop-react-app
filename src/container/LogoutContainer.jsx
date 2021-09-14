import Logout from "components/logout/Logout";
import { useAuthContext } from "contexts/AuthContextProvider";
import React, { useCallback, useEffect } from "react";
import { setAccessTokenRemove } from "util/LocalStorageUtil";

const LogoutContainer = () => {
  const { setAccess } = useAuthContext();

  const logOut = useCallback(() => {
    setAccessTokenRemove();
    setAccess(null);
  }, [setAccess]);

  useEffect(() => logOut(), [logOut]);

  return <Logout />;
};

export default LogoutContainer;
