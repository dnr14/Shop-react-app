import React from "react";
import InsertContainer from "./InsertContainer";
import Col from "./style/Col";
import Row from "./style/Row";
import { MaxWidthContainer } from "./style/Styled";
import Title from "./Title";

const HouseholdledgerInset = () => {
  return (
    <main>
      <MaxWidthContainer>
        <section>
          <Row>
            <Col>
              <Title>
                <h1>지출을 가계부에 등록해보세요.</h1>
              </Title>
            </Col>
          </Row>
          <InsertContainer />
        </section>
      </MaxWidthContainer>
    </main>
  );
};

export default HouseholdledgerInset;
