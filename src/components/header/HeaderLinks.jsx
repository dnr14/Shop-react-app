import React from "react";
import { maxWidthByBreakPointTable } from "style/Styled";
import { minWidthByBreakPointTable } from "style/Styled";
import { Col } from "style/Styled";
import styled, { css } from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  flex-wrap: wrap;
  padding: 0 1rem;
  .nav-item {
    text-align: center;
    a {
      display: block;
      padding: 15px 0.625rem;
      font-size: 1.2rem;
      position: relative;
      color: #fff;
      &:after {
        display: none;
        content: "";
        position: absolute;
        border-bottom: 1px solid;
        height: 1px;
        bottom: 0.625rem;
        right: 0;
        left: 0;
      }
    }
  }

  // 1200px부터
  ${minWidthByBreakPointTable(css`
    .nav-item {
      .active {
        font-weight: bold;
        &:after {
          display: inline-block;
          content: "";
          position: absolute;
          border-bottom: 1px solid;
          height: 1px;
          bottom: 0.625rem;
          right: 0;
          left: 0;
          box-shadow: 2px 2px 3px rgba(34, 47, 62, 1);
        }
      }
    }
  `)}

  // 992px까지
  ${maxWidthByBreakPointTable(css`
    overflow: hidden;
    height: 0;
    padding: 0;
    ${({ headerWidth }) => {
      if (headerWidth < 992) {
        return css`
          transition: 1s;
        `;
      }
    }}
    .nav-item {
      width: 100%;
      a {
        width: 100%;
        &:hover {
          background-color: rgba(236, 240, 241, 1);
          color: rgba(44, 62, 80, 1);
          font-weight: bold;
        }
      }

      .active {
        font-weight: bold;
        background-color: #fff;
        color: #000;
      }
    }

    ${({ isMenuOpen, liLength }) =>
      isMenuOpen &&
      css`
        height: ${liLength * 50}px;
      `}
  `)}
`;

const HeaderLinks = ({ isMenuOpen, headerWidth, pureLinsks, ...rest }) => {
  return (
    <Col {...rest}>
      <nav>
        <StyledUl
          isMenuOpen={isMenuOpen}
          headerWidth={headerWidth}
          liLength={pureLinsks.length}
        >
          {pureLinsks}
        </StyledUl>
      </nav>
    </Col>
  );
};

export default HeaderLinks;
