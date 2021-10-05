import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const activeStyle = {
  fontWeight: "bold",
  backgroundColor: "rgba(46,204,113,1)",
  color: "#fff",
};

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 0.5rem;
  margin: 0 5px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px rgb(52 73 94);
  &:visited {
    color: rgba(46, 204, 113, 1);
  }
`;
