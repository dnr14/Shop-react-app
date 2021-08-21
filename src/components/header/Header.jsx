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

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledMaxWidth>
        <Row>
          <HeaderTitle />
          <HeaderMenuBar {...props} />
          <HeaderLinks {...props} />
        </Row>
      </StyledMaxWidth>
    </StyledHeader>
  );
};

export default Header;
