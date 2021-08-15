import React from "react";
import SpendingContainer from "./ExpenditureContainer";
import Col from "../style/Col";
import Row from "../style/Row";
import { MaxWidthContainer } from "../style/Styled";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import StyledSection from "../style/StyledSection";
import Title from "../Title";
import ExpenditureContainer from "./IncomeContainer";
import styled from "styled-components";

const HouseholdledgerInset = ({ match: { path } }) => {
  return (
    <main>
      <MaxWidthContainer>
        <StyledSection>
          <Row>
            <Col>
              <Title>
                <h1>입출을 가계부에 등록해보세요.</h1>
              </Title>
            </Col>
          </Row>

          <LinkContainer>
            <ActiveNavLink url={`${path}/spending`} text={"지출"} />
            <ActiveNavLink url={`${path}/expenditure`} text={"수입"} />
          </LinkContainer>

          <Route path={`${path}/spending`} component={SpendingContainer} />
          <Route path={`${path}/expenditure`} component={ExpenditureContainer} />
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

const LinkContainer = styled.div`
  margin-bottom: 10px;
  margin-left: -10px;
  a {
    text-align: center;
    color: black;
    padding: 10px;
  }
`;

export default HouseholdledgerInset;
