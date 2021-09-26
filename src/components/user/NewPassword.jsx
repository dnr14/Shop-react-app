import FormError from "components/common/FormError";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import PopUp from "components/login/PopUp";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import * as NewPassowrd from "style/login/NewPassowrd.styled";
import { StyledMaxWidth } from "style/Styled";

const NewPassword = memo(
  ({ handleChange, handleSubmit, setVisible, fetchState, visible, form, value }) => {
    const { success, loading, error } = fetchState;

    return (
      <StyledMaxWidth>
        <NewPassowrd.Container>
          <Loading loading={loading} />
          <PopUp visible={visible} setVisible={setVisible} message={error} />
          <Title>{success ? "변경완료" : "비밀번호 변경"}</Title>

          <form onSubmit={handleSubmit}>
            <NewPassowrd.FlexBox>
              {success ? (
                <>
                  <div className="success">성공적으로 변경되었습니다.</div>
                  <div className="success">
                    <Link to="/login">
                      <button>로그인하기</button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span>아이디</span>
                    <input type="text" name="id" defaultValue={value.id} disabled />
                  </div>
                  <div>
                    <span>이메일</span>
                    <input type="text" name="email" defaultValue={value.email} disabled />
                  </div>
                  <div>
                    <span>새비밀번호</span>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={form.password.value}
                    />
                  </div>
                  <FormError message={form.password.errorText} />
                  <button type="submit">변경</button>
                </>
              )}
            </NewPassowrd.FlexBox>
          </form>
        </NewPassowrd.Container>
      </StyledMaxWidth>
    );
  }
);

export default NewPassword;
