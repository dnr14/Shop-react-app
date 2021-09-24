import NotFount from "components/404/NotFount";
import Loading from "components/common/Loading";
import ErrorBoundary from "components/error/ErrorBoundary";
import User from "components/user/User";
import useInfoAsync from "hooks/useInfoAsync";
import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import UserPasswordUpdateContainer from "./UserPasswordUpdateContainer";

const UserContainer = () => {
  // 로딩 결과 에러
  const [state, getUserInfoAPI] = useInfoAsync();
  const history = useHistory();
  const match = useRouteMatch();
  const { path } = match;

  useEffect(() => {
    getUserInfoAPI();
  }, [getUserInfoAPI]);

  useEffect(() => {
    // access토큰이 유효하지 않으면 이동
    if (state.error) {
      history.push("/");
      return;
    }
  }, [state, history]);

  if (state.loading || state.info === null) return <Loading loading={state.loading} />;

  return (
    <ErrorBoundary>
      <Switch>
        <Route
          path={`${path}/password`}
          render={() => <UserPasswordUpdateContainer info={state.info} />}
        />
        <Route
          path={`${path}`}
          render={() => state.info && <User info={state.info} />}
          exact
        />
        <Route component={NotFount} />
      </Switch>
    </ErrorBoundary>
  );
};

export default UserContainer;
