import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  letter-spacing: 0.09rem;
  box-shadow: 0px 0px 2px rgba(52 73 94);
  border: none;
  color: rgba(44, 62, 80, 1);

  ::placeholder {
    color: rgba(44, 62, 80, 0.5);
    transition: opacity 0.35s;
  }
  :focus::placeholder {
    opacity: 0;
  }
`;
