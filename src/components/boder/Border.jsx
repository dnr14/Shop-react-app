import React, { forwardRef, memo } from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container, LayOut } from "style/border/Border.styled";
import Form from "./Form";

const Border = ({ handleBorderSubmit, borders }, ref) => {
  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <LayOut>
            <div>
              <span>댓글 {borders?.length}</span>
            </div>
            <Form handleBorderSubmit={handleBorderSubmit} ref={ref} />
          </LayOut>
          <LayOut>
            {borders &&
              borders.map((border) => {
                return <Test key={border.borderId} border={border} />;
              })}
          </LayOut>
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

const Test = memo(function Test({ border }) {
  return (
    <div>
      <div>
        작성자: <span>{border.createId}</span>
      </div>
      <div>
        작성시간: <span>{border.createAt}</span>
      </div>
      <div>{border.body} </div>
      <div>{border.originalFileName} </div>
      {border?.fileName && (
        <div style={{ textAlign: "center" }}>
          <img
            src={`http://localhost:5000/public/${border.fileName}`}
            alt="img"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      )}
    </div>
  );
});

export default forwardRef(Border);
