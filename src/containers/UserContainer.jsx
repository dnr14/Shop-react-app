import NotFount from "components/404/NotFount";
import Loading from "components/common/Loading";
import ErrorBoundary from "components/error/ErrorBoundary";
import User from "components/user/User";
import UserDelete from "components/user/UserDelete";
import { useAuthContext } from "contexts/AuthContextProvider";
import useInfoAsync from "hooks/useInfoAsync";
import useUserDelete from "hooks/useUserDeleteAsync";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { setAccessTokenRemove } from "utils/LocalStorageUtil";
import UserPasswordUpdateContainer from "./UserPasswordUpdateContainer";
import deleteImg from "images/exit.jpg";

const UserContainer = () => {
  const [userState, getUserInfoAPI] = useInfoAsync();
  const [userDeleteState, getUserDeleteApi] = useUserDelete();
  const [redirectCount, setRedirectCount] = useState(5);
  const { setAccess } = useAuthContext();
  const history = useHistory();
  const match = useRouteMatch();
  const { path } = match;

  useEffect(() => {
    getUserInfoAPI();
    const image = new Image();
    image.src = deleteImg;
  }, [getUserInfoAPI]);

  useEffect(() => {
    const { error } = userState;
    if (error) {
      const { status } = error;
      if (status === 401) {
        history.push("/");
        return;
      } else {
        window.alert("정보를 불러오는 도중 에러가 발생했습니다. 다시 시도해주세요.");
      }
    }
  }, [userState, history]);

  useEffect(() => {
    const { error } = userDeleteState;
    if (error) {
      const { status } = error;
      if (status === 401) {
        history.push("/");
      } else {
        window.alert("삭제 도중 에러가 발생했습니다. 다시 시도해주세요.");
      }
      return;
    }
    const { success } = userDeleteState;
    let timer;
    if (success) {
      if (redirectCount === 0) {
        setAccess(null);
        return;
      }
      if (redirectCount === 5) {
        setAccessTokenRemove();
      }
      timer = setTimeout(() => setRedirectCount((prev) => --prev), 1000);
    }
    return () => {
      if (success) {
        clearTimeout(timer);
      }
    };
  }, [userDeleteState, history, setAccess, redirectCount]);

  if (userState.loading || userState.info === null || userDeleteState.loading) {
    return <Loading loading={userState.loading} />;
  }

  const handleUserDeleteClick = () => {
    const DELETE_MESSAGE = `정말로 삭제 하겠습니까? \n삭제 시 복구 할 수 없습니다. `;
    if (window.confirm(DELETE_MESSAGE)) {
      const { id } = userState.info;
      getUserDeleteApi(id);
    }
  };

  if (userDeleteState.success) {
    return <UserDelete redirectCount={redirectCount} />;
  }

  return (
    <ErrorBoundary>
      <Switch>
        <Route
          path={`${path}/password`}
          render={() => <UserPasswordUpdateContainer user={userState.info} />}
        />
        <Route
          path={`${path}`}
          render={() =>
            userState.info && (
              <User info={userState.info} userDelete={handleUserDeleteClick} />
            )
          }
          exact
        />
        <Route component={NotFount} />
      </Switch>
    </ErrorBoundary>
  );
};

export default UserContainer;
