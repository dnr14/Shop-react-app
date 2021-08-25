import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 10px;
`;

const DataSort = ({ path, currentOption }) => {
  return (
    <>
      <StyledDiv>
        <Link to={`${path}?page=${currentOption.page}&sort=asc`}>
          <button>수입날짜 오름차순</button>
        </Link>
        <Link to={`${path}?page=${currentOption.page}&sort=desc`}>
          <button>수입날짜 내림차순</button>
        </Link>
        <Link to={`${path}?page=${currentOption.page}`}>
          <button>정렬 해제</button>
        </Link>
      </StyledDiv>
    </>
  );
};

export default memo(DataSort);
