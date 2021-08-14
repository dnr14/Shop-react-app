import React, { useState } from "react";
import Col from "./style/Col";
import Row from "./style/Row";
import { MaxWidthContainer } from "./style/Styled";
import { Link } from "react-router-dom";
import StyledHeader from "./style/StyledHeader";

const Header = () => {
  const [menuOpen, setMenuOpne] = useState(false);

  const handleClick = () => setMenuOpne(!menuOpen);

  return (
    <StyledHeader>
      <MaxWidthContainer>
        <Row>
          <Col lg={2} md={2}>
            <div className="header-title">
              <Link to="/">똑똑 가계부</Link>
              <div className={menuOpen ? "menu-btn open" : "menu-btn"} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
              </div>
            </div>
          </Col>
          <Col lg={10} md={10}>
            <nav>
              <ul className={menuOpen ? "nav-list open" : "nav-list"}>
                <li className="nav-item">
                  <a href="/">로그인</a>
                </li>
                <li className="nav-item">
                  <a href="/">회원가입</a>
                </li>
                <li className="nav-item">
                  <Link to="/insert">가계부 등록</Link>
                </li>
                <li className="nav-item">
                  <a href="/">가계부 현황</a>
                </li>
                <li className="nav-item">
                  <a href="/">통계</a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </MaxWidthContainer>
    </StyledHeader>
  );
};

export default Header;
