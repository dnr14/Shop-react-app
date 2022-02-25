import { tab } from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";
import React from "react";
import styled from "styled-components";

const InnerWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
  ${getFlex("center", "center")}
  flex-wrap: wrap;
  gap: 0.7rem;
  width: 150px;
  height: 50px;
  ${tab} {
    width: 100%;
  }

  & + & {
    flex: 1;
    position: relative;
    margin-left: 5px;
  }
`;

export default InnerWrapper;
