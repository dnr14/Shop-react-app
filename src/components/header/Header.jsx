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
          <HeaderTitle />
          <HeaderMenuBar isMenuOpen={isMenuOpen} handleClick={handleClick} />
          <HeaderLinks isMenuOpen={isMenuOpen} headerWidth={headerWidth} pureLinsks={pureLinsks} />
        </Row>
      </StyledMaxWidth>
    </StyledHeader>
  );
};

export default Header;
