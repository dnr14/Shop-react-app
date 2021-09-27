import React, { memo } from "react";
import NotFoundImg from "images/404.png";
import styled from "styled-components";
import { StyledMaxWidth } from "style/Styled";
import { maxWidthByBreakPointSmaillMobile } from "style/Styled";
import { Link } from "react-router-dom";
import borderIcon from "images/bordericon.png";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10%;
  margin-bottom: 10%;
  color: rgba(46, 204, 113, 1);

  img {
    width: 20%;
    ${maxWidthByBreakPointSmaillMobile({ width: "50%" })}
  }
  span {
    font-weight: 900;
    font-size: 2rem;
    ${maxWidthByBreakPointSmaillMobile({ fontSize: "1.5rem" })}
  }

  button {
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    background: rgba(46, 204, 113, 1);
    border-radius: 5px;
    font-weight: 900;
    color: #fff;
    border: none;
    box-shadow: 0px 2px 5px rgba(00, 00, 00, 0.8);

    &:hover {
      background: rgba(46, 204, 113, 0.8);
    }
  }
`;

const NotFount = () => {
  return (
    <StyledMaxWidth>
      <StyledDiv>
        <img src={NotFoundImg} alt="404" />
        <span>NOT FOUND</span>
        <span>잘못 된 페이지입니다.</span>
        <Link to="/">
          <button>H O M E</button>
        </Link>
      </StyledDiv>
    </StyledMaxWidth>
  );
};

export default memo(NotFount);
