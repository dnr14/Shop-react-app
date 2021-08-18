import React, { useState } from "react";
import { MaxWidthContainer, Row, Col } from "components/style/Styled";
import { Link } from "react-router-dom";
import StyledHeader from "components/style/StyledHeader";
import Links from "./Links";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleClick = (e) => {
    e.type !== "blur" ? setIsMenuActive(!isMenuActive) : setIsMenuActive(false);
  };

  return (
    <StyledHeader>
      <MaxWidthContainer>
        <Row>
          <Col lg={2} md={2}>
            <div className="header-title">
              <Link to="/">똑똑 가계부</Link>
              <div tabIndex="-1" className={isMenuActive ? "menu-btn open" : "menu-btn"} onBlur={handleClick} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
              </div>
            </div>
          </Col>
          <Col lg={10} md={10}>
            <Links isMenuActive={isMenuActive} />
          </Col>
        </Row>
      </MaxWidthContainer>
    </StyledHeader>
  );
};

export default Header;
