import React from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container } from "style/user/UserDelete.styled";
import deleteImg from "images/exit.jpg";
const UserDelete = ({ redirectCount }) => {
  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <img src={deleteImg} alt="인사" />
          <article>
            <div>
              <span>아이디가 삭제 되었습니다. 이용 해주셔서 감사합니다.</span>
            </div>
            <div>
              <span>{redirectCount}초 후 자동으로 이동 합니다.</span>
            </div>
          </article>
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default UserDelete;
