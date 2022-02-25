import React from "react";
import styled from "styled-components";

const Empty = ({ text }) => <EmptyWrapper>{text}</EmptyWrapper>;
const EmptyWrapper = styled.div`
  padding: 1rem;
  text-align: center;
  letter-spacing: 0.3rem;
  font-size: 1.1rem;
  font-weight: 900;
`;

export default Empty;
