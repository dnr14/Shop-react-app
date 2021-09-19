import React from "react";
import { maxWidthByBreakPointSmaillMobile } from "style/Styled";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  height: 30px;
  text-align: center;

  input,
  span {
    height: inherit;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    position: relative;
    letter-spacing: 0.2rem;

    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 10px;
      margin: auto 0;
      border-right: 1px solid #000;
      right: 10px;
    }
  }

  input {
    width: 100%;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    padding: 0;
    font-size: 1.5rem;
  }

  ${maxWidthByBreakPointSmaillMobile(css`
    span {
      &::after {
        display: none;
      }
    }
    input {
      text-align: center;
    }
  `)}
`;

const addStyle = css`
  ${maxWidthByBreakPointSmaillMobile(
    css`
      width: 100%;
    `
  )}
`;

const UserInfoInput = ({ text, ...rest }) => {
  return (
    <Row
      addStyle={css`
        margin: 10px 0;
      `}
    >
      <Col xs={3} sm={3} md={3} lg={3} addStyle={addStyle}>
        <StyledDiv>
          <span>{text}</span>
        </StyledDiv>
      </Col>
      <Col xs={9} sm={9} md={9} lg={9} addStyle={addStyle}>
        <StyledDiv>
          <input {...rest} disabled />
        </StyledDiv>
      </Col>
    </Row>
  );
};

UserInfoInput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default UserInfoInput;
