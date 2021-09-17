import React from "react";
import { Redirect, Route } from "react-router";
import { getAccessToken } from "utils/LocalStorageUtil";

const PublicRouter = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

function isLogin() {
  return !!getAccessToken();
}

export default PublicRouter;
