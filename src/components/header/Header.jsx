import { StyledMaxWidth } from "style/Styled";
import { Row } from "style/Styled";
import styled from "styled-components";
import HeaderLinks from "./HeaderLinks";
import HeaderMenuBar from "./HeaderMenuBar";
import HeaderTitle from "./HeaderTitle";

const StyledHeader = styled.header`
  background-color: rgba(46, 204, 113, 1);
  letter-spacing: 0.2rem;
`;

const Header = ({ isMenuOpen, handleClick, headerWidth, pureLinsks }) => {
  return (
    <StyledHeader>
      <StyledMaxWidth>
        <Row>
          <HeaderTitle xs={6} sm={6} md={3} lg={3} />
          <HeaderMenuBar
            xs={6}
            sm={6}
            md={0}
            lg={0}
            isMenuOpen={isMenuOpen}
            handleClick={handleClick}
          />
          <HeaderLinks
            xs={12}
            sm={12}
            md={9}
            lg={9}
            isMenuOpen={isMenuOpen}
            headerWidth={headerWidth}
            pureLinsks={pureLinsks}
          />
        </Row>
      </StyledMaxWidth>
    </StyledHeader>
  );
};

export default Header;
