import React, { memo } from "react";
import { Col, maxWidthByBreakPointTable } from "style/Styled";
import styled, { css } from "styled-components";

const StyledMenuBar = styled.button`
  display: none;

  ${maxWidthByBreakPointTable(css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100px;
    cursor: pointer;
    transform: 0.5;
    padding: 0;
    margin-left: auto;
    background-color: transparent;
    border: none;

    & > div {
      position: relative;
      width: 3rem;
      height: 0.5rem;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: 0.5s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 3rem;
        left: 0;
        height: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
        transition: 0.5s;
      }
      &::before {
        transform: translateY(-1rem);
      }
      &::after {
        transform: translateY(1rem);
      }
    }

    a {
      font-size: 2rem;
    }

    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        & > div {
          transform: translateX(-50px);
          background: transparent;
          box-shadow: none;
          &::before {
            transform: rotate(45deg) translate(35px, -35px);
          }
          &::after {
            transform: rotate(-45deg) translate(35px, 35px);
          }
        }
      `}
  `)}
`;

const HeaderMenuBar = ({ isMenuOpen, handleClick, ...rest }) => {
  return (
    <Col {...rest}>
      <StyledMenuBar isMenuOpen={isMenuOpen} onBlur={handleClick} onClick={handleClick}>
        <div></div>
      </StyledMenuBar>
    </Col>
  );
};

export default memo(HeaderMenuBar);
