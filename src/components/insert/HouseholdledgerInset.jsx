import React from "react";
import ExpenditureContainer from "./ExpenditureContainer";
import { MaxWidthContainer, LinkContainer, Row, Col, StyledSection, Title } from "components/style/Styled";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import IncomeContainer from "./IncomeContainer";

const HouseholdledgerInset = ({ match: { path } }) => {
  return (
    <main>
      <MaxWidthContainer>
        <StyledSection>
          <Row>
            <Col>
              <Title>입출을 가계부에 등록해보세요.</Title>
            </Col>
          </Row>

          <LinkContainer>
            <ActiveNavLink url={`${path}/expenditure`} text={"지출"} />
            <ActiveNavLink url={`${path}/income`} text={"수입"} />
          </LinkContainer>

          <Route path={`${path}/expenditure`} component={ExpenditureContainer} />
          <Route path={`${path}/income`} component={IncomeContainer} />
        </StyledSection>
      </MaxWidthContainer>
    </main>
  );
};

const ActiveNavLink = ({ url, text }) => {
  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
  };

  return (
    <NavLink to={url} activeStyle={activeStyle}>
      {text}
    </NavLink>
  );
};

export default HouseholdledgerInset;
