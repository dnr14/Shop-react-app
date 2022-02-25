import { getFlex } from "assets/style/GlobalStyled";
import React from "react";
import styled from "styled-components";

const InsertWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  ${getFlex()}
  margin-bottom: 5px;
  flex-wrap: wrap;
`;

export default InsertWrapper;
