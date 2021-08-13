import React from "react";
import Col from "./style/Col";
import Row from "./style/Row";
import { MaxWidthContainer } from "./style/Styled";
import StyledHeader from "./style/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <MaxWidthContainer>
        <Row>
          <Col lg={2} md={2}>
            <div className="header--title">
              <a href="/">똑똑 가계부</a>
            </div>
          </Col>
          <Col lg={10} md={10}>
            <nav>
              <ul className="nav--list">
                <li className="nav--item">
                  <a href="/">로그인</a>
                </li>
                <li className="nav--item">
                  <a href="/">회원가입</a>
                </li>
                <li className="nav--item">
                  <a href="/">가계부 등록</a>
                </li>
                <li className="nav--item">
                  <a href="/">가계부 현황</a>
                </li>
                <li className="nav--item">
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
