import React from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container, LayOut } from "style/border/Borders.styled";
import Form from "./Form";
import Border from "./Border";

const Borders = ({ handleBorderSubmit, borders }) => {
  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <LayOut>
            <div>
              <span>댓글 {borders?.length}</span>
            </div>
            <Form handleBorderSubmit={handleBorderSubmit} />
          </LayOut>
          <LayOut>
            {borders &&
              borders.map((border) => <Border key={border.borderId} border={border} />)}
          </LayOut>
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default Borders;
