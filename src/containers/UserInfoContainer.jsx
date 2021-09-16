import UserInfo from "components/userInfo/UserInfo";
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
    if (state.error) {
      history.push("/");
      return;
    }
  }, [state, history]);

  if (state.loading) {
    return <div>로딩 중..</div>;
  }

  return <UserInfo info={state.info} />;
};

export default UserInfoContainer;
