import React from "react";
import styled from "styled-components";

const Form = ({ children, onSubmit, ...rest }) => {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      {children}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 20px 0;
`;

export default Form;
