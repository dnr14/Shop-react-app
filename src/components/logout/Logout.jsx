import React, { memo } from "react";
import { Link } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";

const Logout = () => {
  return (
    <StyledMaxWidth>
      <div>
        <div>로그아웃이 되었습니다.</div>
        <Link to="/login">로그인</Link>
      </div>
    </StyledMaxWidth>
  );
};

export default memo(Logout);
