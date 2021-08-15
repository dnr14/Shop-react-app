import React, { useState } from "react";
import Col from "../style/Col";
import Row from "../style/Row";
import { MaxWidthContainer } from "../style/Styled";
import { Link, NavLink } from "react-router-dom";
import StyledHeader from "../style/StyledHeader";

const activeClassName = "active";

const Header = () => {
  const [menuOpen, setMenuOpne] = useState(false);

  const handleClick = () => {
    setMenuOpne(!menuOpen);
  };

  return (
    <StyledHeader>
      <MaxWidthContainer>
        <Row>
          <Col lg={2} md={2}>
            <div className="header-title">
              <Link to="/">똑똑 가계부</Link>
              <div tabIndex="-1" className={menuOpen ? "menu-btn open" : "menu-btn"} onBlur={handleClick} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
              </div>
            </div>
          </Col>
          <Col lg={10} md={10}>
            <nav>
              <ul className={menuOpen ? "nav-list open" : "nav-list"}>
                <li className="nav-item">
                  <NavLink to="/login" activeClassName={activeClassName}>
                    로그인
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="/">회원가입</a>
                </li>
                <li className="nav-item">
                  <NavLink to="/insert" activeClassName={activeClassName}>
                    입출 등록
                  </NavLink>
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
