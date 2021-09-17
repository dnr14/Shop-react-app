import { useAuthContext } from "contexts/AuthContextProvider";
import React, { useCallback, useEffect } from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { setAccess } = useAuthContext();

  const isLoginFail = useCallback(() => {
    if (!isLogin()) {
      setAccess(null);
    }
  }, [setAccess]);

  useEffect(() => isLoginFail(), [isLoginFail]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouter;

const isLogin = () => !!localStorage.getItem("ACCESS_TOKEN");
