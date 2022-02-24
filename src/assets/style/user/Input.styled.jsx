import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 0.5rem 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  box-sizing: content-box;
  padding: 0 0 0.3rem 0.7rem;
  border: transparent;
  background: transparent;
  font-size: 1.8rem;
  letter-spacing: 0.13rem;
  text-align: center;
  text-overflow: ellipsis;
  height: 2.5rem;

  @media only screen and (min-width: ${540}px) {
    flex: 8;
    margin: 0;
    height: 2rem;
    text-align: start;
  }
`;

export const Text = styled.span`
  letter-spacing: 0.12rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2ecc71;
  margin: 0 0.5rem;

  @media only screen and (min-width: ${540}px) {
    font-size: 1.2rem;
    flex: 2;
  }
`;
