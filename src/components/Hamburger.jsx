import React, { memo } from "react";
import styled, { css } from "styled-components";
import { mobile } from "assets/style/GlobalStyled";
import { getBackGroundWhiteColor1 } from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";

const Hamburger = ({ isMenuOpen, handleClick }) => {
  return (
    <HamburgerWrapper
      isMenuOpen={isMenuOpen}
      // onBlur={handleClick}
      onClick={handleClick}
    >
      <div></div>
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.button`
  display: none;

  ${mobile} {
    ${getFlex("center", "center")}
    width: 80px;
    height: 80px;
    cursor: pointer;
    padding: 0;
    margin-left: auto;
    border: none;
    background-color: transparent;

    & > div {
      position: relative;
      width: 2.5rem;
      height: 0.35rem;
      ${getBackGroundWhiteColor1};
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: 0.5s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 2.5rem;
        left: 0;
        height: 0.35rem;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
        transition: 0.5s;
        ${getBackGroundWhiteColor1};
      }
      &::before {
        transform: translateY(-1rem);
      }
      &::after {
        transform: translateY(1rem);
      }
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
  }
`;

export default memo(Hamburger);
