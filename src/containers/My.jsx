import NotFount from "components/NotFound";
import ErrorBoundary from "components/ErrorBoundary";
import MyInfo from "components/MyInfo";
import { useAuthContext } from "contexts/AuthProvider";
import useMyInfo from "hooks/useMyInfo";
import useUserWithdrawal from "hooks/useUserWithdrawal";
import React, { useCallback, useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { accessTokenRemove } from "utils/LocalStorageUtil";
import PasswordModify from "./PasswordModify";
import withdrawalImg from "assets/images/withdrawal.jpg";
import { Link } from "react-router-dom";
import Button from "components/common/Button";
import Withdrawal from "components/Withdrawal";

const My = () => {
  const [my, fetchMyInfo] = useMyInfo();
  const { loading, info } = my;
  const [withdrawalState, fetchWithdrawal] = useUserWithdrawal();
  const { setAccess } = useAuthContext();
  const [count, setCount] = useState(5);
  const history = useHistory();
  const match = useRouteMatch();
  const { path } = match;

  const handleWithdrawal = useCallback(() => {
    if (window.confirm("정말로 삭제 하겠습니까? 삭제 시 복구 할 수 없습니다. ")) {
      fetchWithdrawal(info.id);
    }
  }, [info, fetchWithdrawal]);

  useEffect(() => {
    fetchMyInfo();
    const fetchPreImg = () => {
      const image = new Image();
      image.src = withdrawalImg;
    };
    fetchPreImg();
  }, [fetchMyInfo]);

  useEffect(() => {
    const { success } = withdrawalState;
    let timer;
    if (success) timer = setTimeout(() => setCount(prev => --prev), 1000);
    return () => {
      if (success) {
        clearTimeout(timer);
        if (count === 5) accessTokenRemove();
        if (count === 0) setAccess(null);
      }
    };
  }, [withdrawalState, history, setAccess, count]);

  if (withdrawalState.success) return <Withdrawal count={count} />;

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}`} exact>
          <MyInfo id={info?.id} email={info?.email} loading={loading}>
            <Link to="/my/password">
              <Button text="비밀번호 수정" width="100%" />
            </Link>
            <Button text="회원탈퇴" width="100%" onClick={handleWithdrawal} />
          </MyInfo>
        </Route>
        <Route path={`${path}/password`}>
          <PasswordModify id={info?.id} email={info?.email} />
        </Route>
        <Route path="*" component={NotFount} />
      </Switch>
    </ErrorBoundary>
  );
};

export default My;
