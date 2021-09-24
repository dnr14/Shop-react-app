import React, { memo } from "react";
import PropTypes from "prop-types";
import { Row, Col, maxWidthByBreakPointSmaillMobile } from "style/Styled";
import { css } from "styled-components";
import { StyledDiv, Text, StyledInput } from "style/user/Input.styled";

const addStyle = css`
  ${maxWidthByBreakPointSmaillMobile({ width: "100%" })}
`;
const rowAddStyle = { margin: "0.5rem 0" };

const Input = ({ text, ...rest }) => {
  return (
    <Row addStyle={rowAddStyle}>
      <Col addStyle={addStyle}>
        <StyledDiv>
          <Text>{text}</Text>
          <StyledInput {...rest} />
        </StyledDiv>
      </Col>
    </Row>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(Input);
