import React, { memo } from "react";
import notFoundImg from "assets/images/404.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import { getFlex } from "assets/style/GlobalStyled";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundImg src={notFoundImg} alt="NotFound" />
      <span>잘못 된 경로입니다.</span>
      <Link to="/">
        <Button text="H O M E" padding="5px 20px" />
      </Link>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  ${getFlex("center", "center")}
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  span {
    font-weight: 500;
    font-size: 2rem;
  }
`;

const NotFoundImg = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 200px;
  width: 70%;
`;

export default memo(NotFound);
