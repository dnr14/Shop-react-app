import React from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container, LayOut } from "style/border/Borders.styled";
import Form from "./Form";
import Border from "./Border";

const Borders = ({ handleBorderSubmit, borders, observer }) => {
  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <LayOut>
            <div>
              <span>게시글 {borders?.length}</span>
            </div>
            <Form handleBorderSubmit={handleBorderSubmit} />
          </LayOut>
          <LayOut>
            {borders?.map((border) => (
              <Border key={border.borderId} border={border} />
            ))}
            <div ref={observer} />
          </LayOut>
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default Borders;
