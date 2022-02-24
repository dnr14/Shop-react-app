import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getRedColor1 } from "assets/style/GlobalStyled";
import { css } from "styled-components";

const ErrorMessage = ({ message, ...rest }) => {
  if (!message) return null;

  return <FormErrorWrapper {...rest}>{message}</FormErrorWrapper>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: "",
};

const FormErrorWrapper = styled.div`
  text-align: center;
  margin: 1rem 0;
  ${getRedColor1}

  ${({ ...rest }) => {
    const { flex, width, margin } = rest;

    return css`
      margin: ${margin};
      width: ${width};
      flex: ${flex};
    `;
  }}
`;

export default memo(ErrorMessage);
