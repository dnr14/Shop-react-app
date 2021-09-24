import PublicRouter from "hoc/PublicRouter";
import React from "react";
import { Route, Switch } from "react-router";
import InsertContainer from "containers/InsertContainer";
import SelectContainer from "containers/SelectContainer";
import MemberShipContainer from "containers/MemberShipContainer";
import LoginCotainer from "containers/LoginCotainer";
import LogoutContainer from "containers/LogoutContainer";
import NotFount from "components/404/NotFount";
import PrivateRouter from "hoc/PrivateRouter";
import Home from "components/home/Home";
import UserContainer from "containers/UserContainer";

const Routers = () => {
  return (
    <>
      <Switch>
        <PublicRouter path="/login" component={LoginCotainer} restricted />
        <Route path="/insert" component={InsertContainer} />
        <Route path="/select" component={SelectContainer} />
        <PublicRouter path="/memberShip" component={MemberShipContainer} restricted />
        <PrivateRouter path="/me" component={UserContainer} />
        <PrivateRouter path="/logout" component={LogoutContainer} />
        <Route path="/" component={Home} exact />
        <Route component={NotFount} />
      </Switch>
    </>
  );
};

export default Routers;
