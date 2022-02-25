import PublicRouter from "./PublicRouter";
import React from "react";
import { Route, Switch } from "react-router";
import Insert from "containers/Insert";
import Select from "containers/Select";
import Signup from "containers/Signup";
import Login from "containers/Login";
import NotFount from "components/NotFound";
import My from "containers/My";
import Board from "containers/Board";
import PrivateRouter from "./PrivateRouter";

const Routers = () => {
  return (
    <Switch>
      <PublicRouter path="/signup" component={Signup} restricted />
      <PrivateRouter path="/my" component={My} />
      <Route path={["/board", "/"]} component={Board} exact />
      <PrivateRouter path="/insert" component={Insert} />
      <PrivateRouter path="/select" component={Select} />
      <PublicRouter path={"/login"} component={Login} restricted />
      <Route path="*" component={NotFount} />
    </Switch>
  );
};

// 프론트 이미지 요청 ===> express img url 보내줌 ===> 프론트 img url로 요청==> img 그려짐
// 프론트 요청 ==> express 이미지 읽고 ==> base64로 보내줌
// db에는 base64 저장 x
// s3로 이미지서버를 따로 두던지 해야된다.

export default Routers;
