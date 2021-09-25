import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  span {
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
  }

  input {
    padding: 0.5rem 1rem;
    width: 100%;
    letter-spacing: 0.4rem;
  }
`;
