import Loading from "components/common/Loading";
import ErrorBoundary from "components/error/ErrorBoundary";
import UserInfo from "components/userInfo/UserInfo";
import UserInfoContetProvider from "contexts/UserInfoContetProvider";
import useInfoAsync from "hooks/useInfoAsync";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

const UserInfoContainer = () => {
  // 로딩 결과 에러
  const [state, getUserInfoAPI] = useInfoAsync();
  const history = useHistory();

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

  if (state.loading) return <Loading loading={state.loading} />;

  return (
    <UserInfoContetProvider>
      <ErrorBoundary>{state.info && <UserInfo info={state.info} />}</ErrorBoundary>
    </UserInfoContetProvider>
  );
};

export default UserInfoContainer;
