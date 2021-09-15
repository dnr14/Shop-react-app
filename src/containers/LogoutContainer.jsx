import Logout from "components/logout/Logout";
import { useAuthContext } from "contexts/AuthContextProvider";
import React, { useCallback, useEffect } from "react";
import { setAccessTokenRemove } from "utils/LocalStorageUtil";

const LogoutContainer = () => {
  const { setAccess } = useAuthContext();
  console.log(1);

  const logOut = useCallback(() => {
    setAccessTokenRemove();
    setAccess(null);
  }, [setAccess]);

  useEffect(() => logOut(), [logOut]);

  return <Logout />;
};

export default LogoutContainer;
