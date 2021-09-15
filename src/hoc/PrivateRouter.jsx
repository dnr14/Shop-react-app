import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ component: Component, ...rest }) => {
  console.log(isLogin());
  return <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRouter;

export const isLogin = () => !!localStorage.getItem("ACCESS_TOKEN");
