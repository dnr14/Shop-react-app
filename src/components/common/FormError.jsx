import React, { memo } from "react";
import { Row } from "style/Styled";
import { Col } from "style/Styled";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  text-align: center;
  margin: 0.5rem 0;
  color: #c0392b;
`;

const FormError = ({ message }) => {
  return (
    <>
      {message && (
        <Row>
          <Col>
            <StyledDiv>{message}</StyledDiv>
          </Col>
        </Row>
      )}
    </>
  );
};

FormError.propTypes = {
  message: PropTypes.string,
};

FormError.defaultProps = {
  message: "",
};

export default memo(FormError);
