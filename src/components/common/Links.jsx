import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getBrandColor1 } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow3 } from "assets/style/GlobalStyled";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Links = ({ text, path }) => {
  return (
    <CustomNavLink to={path} activeClassName="active">
      {text}
    </CustomNavLink>
  );
};

const CustomNavLink = styled(NavLink)`
  display: inline-block;
  padding: 0.5rem;
  border-radius: 3px;
  width: 75px;
  text-align: center;
  & + & {
    margin-left: 0.5rem;
  }
  ${getBoxShadow3}
  &:visited {
    ${getBrandColor1}
  }
  &.active {
    font-weight: 500;
    ${getBackGroundBrandColor1}
    ${getWhiteColor1}
  }
`;

export default Links;
