import React, { forwardRef } from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container } from "style/border/Border.styled";
import styled from "styled-components";
import Form from "./Form";

const LayOut = styled.div`
  padding: 20px;

  & > div {
    &:first-child {
      padding: 10px 0;
    }
  }

  & > div {
    &:last-child {
      padding: 10px 0;
    }
  }
`;

const Border = ({ handleBorderSubmit }, ref) => {
  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <LayOut>
            <div>
              <span>댓글 0</span>
            </div>
            <Form handleBorderSubmit={handleBorderSubmit} ref={ref} />
          </LayOut>
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default forwardRef(Border);
