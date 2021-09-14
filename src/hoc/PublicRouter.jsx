import React from "react";
import { Redirect, Route } from "react-router";
import { isLogin } from "./PrivateRouter";

const PublicRouter = ({ component: Component, restricted, ...rest }) => {
  return <Route {...rest} render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)} />;
};

export default PublicRouter;
