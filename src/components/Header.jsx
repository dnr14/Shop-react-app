import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Links from "./Links";
import Hamburger from "./Hamburger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerWidth, setHeaderWidth] = useState(window.innerWidth);

  const handleClick = useCallback(
    ({ type }) => (type !== "blur" ? setIsMenuOpen(prevState => !prevState) : setIsMenuOpen(false)),
    [setIsMenuOpen],
  );

  useEffect(() => {
    let timer;

    const resize = window.addEventListener("resize", e => {
      // 디바운스 처리
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(() => {
        const { innerWidth } = e.target;
        setHeaderWidth(innerWidth);
      }, 200);
    });
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <HeaderTitle>
          <Link to="/">간단 가계부</Link>
        </HeaderTitle>
        <Hamburger isMenuOpen={isMenuOpen} handleClick={handleClick} />
        <Links isMenuOpen={isMenuOpen} headerWidth={headerWidth} />
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  ${getBackGroundBrandColor1}
`;
const HeaderInnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${getFlex("space-between", "")}
  padding:0 20px;
  flex-wrap: wrap;
`;

const HeaderTitle = styled.div`
  ${getFlex("center", "center")}
  a {
    ${getWhiteColor1}
    font-weight: 900;
    font-size: 1.5rem;
  }
`;

export default Header;
