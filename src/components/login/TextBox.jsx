import { memo } from "react";
import { maxWidthByBreakPointMobile } from "style/Styled";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled, { css } from "styled-components";

const StyledTextBox = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;

  ${maxWidthByBreakPointMobile(
    css`
      font-size: 1rem;
      span {
        line-height: 1rem;
      }
    `
  )}
`;

const TextBox = ({ text }) => {
  return (
    <Row addStyle={{ margin: "10px 0" }}>
      <Col>
        <StyledTextBox>
          <span>{text}</span>
        </StyledTextBox>
      </Col>
    </Row>
  );
};

const propsEqual = (preveProps, nextProps) => nextProps.text === preveProps.text;

export default memo(TextBox, propsEqual);
