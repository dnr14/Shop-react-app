import PublicRouter from "./PublicRouter";
import React from "react";
import { Route, Switch } from "react-router";
import InsertContainer from "containers/InsertContainer";
import SelectContainer from "containers/SelectContainer";
import Signup from "containers/Signup";
import Login from "containers/Login";
import NotFount from "components/NotFound";
import My from "containers/My";
import Board from "containers/Board";
import PrivateRouter from "./PrivateRouter";

const Routers = () => {
  return (
    <Switch>
      <PublicRouter path="/login" component={Login} restricted />
      <PublicRouter path="/signup" component={Signup} restricted />
      <PrivateRouter path="/my" component={My} />
      <Route path="/board" component={Board} />
      <Route path="/insert" component={InsertContainer} />
      <Route path="/select" component={SelectContainer} />
      <Route path="*" component={NotFount} />
    </Switch>
  );
};

export default Routers;
