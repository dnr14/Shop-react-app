import MemberShipForm from "components/memberShip/MemberShipForm";
import Title from "components/common/Title";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyledMaxWidth } from "style/Styled";
import styled from "styled-components";
import { useHistory } from "react-router";

const errorsEnum = Object.freeze({
  id: Object.freeze({
    maxLengthError: "아이디는 최대 10자 입니다.",
    minLengthError: "아이디는 최소 5자 입니다.",
    firstTextError: "아이디 첫자는 영어 입니다.",
    textSpecialSymbolError: "특호기호를 입력했습니다.",
    textKoreaLengError: "한글을 입력했습니다.",
    spaceError: "공백을 입력했습니다.",
  }),
  email: Object.freeze({
    firstTextError: "아이디 첫자는 영어 입니다.",
    textSpecialSymbolError: "특호기호를 입력했습니다.",
    textKoreaLengError: "한글을 입력했습니다.",
    spaceError: "공백을 입력했습니다.",
    emailPatternError: "이메일 형식이 아닙니다.",
    maxLengthError: "아이디는 최대 25자 입니다.",
  }),
  password: Object.freeze({
    maxLengthError: "비밀번호는 최대 15자 입니다.",
    minLengthError: "비밀번호는 최소 6자 입니다.",
  }),
});

const StyledMain = styled.main`
  width: 50%;
  margin: 0 auto;
`;

const inputInitialization = {
  id: { value: "", isError: false, errorText: "" },
  email: { value: "", isError: false, errorText: "" },
  //isShow 비밀번호 별표에서 보이게 트리거
  password: { value: "", isError: false, errorText: "", isShow: false },
  confirmPassword: { value: "", isError: false, errorText: "", isShow: false },
};

const MemberShipContainer = () => {
  const [memberShip, setMemberShip] = useState(inputInitialization);
  const isBlocking = useRef(false);
  const history = useHistory();

  useEffect(() => {
    const unblock = history.block((_, action) => {
      if (action === "POP" || action === "PUSH") {
        isBlocking.current = true;
        return window.confirm("나갈꺼냐?");
      }
      return true;
    });

    return () => unblock();
  }, [history]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { id, email, password, confirmPassword } = memberShip;
      const isIdValueEmpty = isEmpty(id.value);
      const isEmailValueEmpty = isEmpty(email.value);
      const isPasswordValueEmpty = isEmpty(password.value);
      const isConfirmPasswordValueEmpty = isEmpty(confirmPassword.value);

      if (isIdValueEmpty || isEmailValueEmpty || isPasswordValueEmpty || isConfirmPasswordValueEmpty) {
        console.log("빈칸을 모두 입력");
        return;
      }

      if (!id.isError && !email.isError && !password.isError && !confirmPassword.isError) {
        console.log("에러없다");
      }
    },
    [memberShip]
  );

  const onReset = useCallback(() => setMemberShip(inputInitialization), []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "id") {
      const maxLengthCheck = isMaxLengthCheck(value);
      const minLengthCheck = isMinLengthCheck(value);
      const firstTextCheck = isFirstTexCheck(value);
      const spaceCheck = isWhiteSpaceCheck(value);
      const specialSymbolCheck = isSpecialSymbol(value);
      const koreaLengCheck = isKoreaLengCheck(value);

      // input 첫번째 텍스트 검사
      if (firstTextCheck) {
        setMemberShip((prevState) =>
          prevState.id.isError === true && prevState.id.errorText === errorsEnum.id.firstTextError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.id.value, isError: true, errorText: errorsEnum.id.firstTextError },
              }
        );
        return;
      }

      // 공백 입력
      if (spaceCheck) {
        setMemberShip((prevState) =>
          prevState.id.isError === true && prevState.id.errorText === errorsEnum.id.spaceError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.id.value, isError: true, errorText: errorsEnum.id.spaceError },
              }
        );
        return;
      }

      // 특수문자
      if (specialSymbolCheck) {
        setMemberShip((prevState) =>
          prevState.id.isError === true && prevState.id.errorText === errorsEnum.id.textSpecialSymbolError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.id.value, isError: true, errorText: errorsEnum.id.textSpecialSymbolError },
              }
        );
        return;
      }

      // 한글 입력
      if (koreaLengCheck) {
        setMemberShip((prevState) =>
          prevState.id.isError === true && prevState.id.errorText === errorsEnum.id.textKoreaLengError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.id.value, isError: true, errorText: errorsEnum.id.textKoreaLengError },
              }
        );
        return;
      }

      // value 최소길이 검사
      if (minLengthCheck) {
        setMemberShip((prevState) => ({ ...prevState, [name]: { value, isError: true, errorText: errorsEnum.id.minLengthError } }));
        return;
      }

      // value 최고길이 검사
      if (maxLengthCheck) {
        setMemberShip((prevState) =>
          prevState.id.isError
            ? prevState
            : { ...prevState, [name]: { value: prevState.id.value, isError: true, errorText: errorsEnum.id.maxLengthError } }
        );
        return;
      }
    }

    if (name === "email") {
      const spaceCheck = isWhiteSpaceCheck(value);
      const specialSymbolCheck = isEmailSpecialSymbol(value);
      const koreaLengCheck = isKoreaLengCheck(value);
      const emailMaxLength = isEmailMaxLength(value);
      const firstTextCheck = isFirstTexCheck(value);
      const emailPatternCheck = isEmailPatternCheck(value);

      // input 첫번째 텍스트 검사
      if (firstTextCheck) {
        setMemberShip((prevState) =>
          prevState.email.isError === true && prevState.email.errorText === errorsEnum.email.firstTextError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.email.value, isError: true, errorText: errorsEnum.email.firstTextError },
              }
        );
        return;
      }

      if (spaceCheck) {
        setMemberShip((prevState) =>
          prevState.email.isError === true && prevState.email.errorText === errorsEnum.email.spaceError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.email.value, isError: true, errorText: errorsEnum.email.spaceError },
              }
        );
        return;
      }

      if (koreaLengCheck) {
        setMemberShip((prevState) =>
          prevState.email.isError === true && prevState.email.errorText === errorsEnum.email.textKoreaLengError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.email.value, isError: true, errorText: errorsEnum.email.textKoreaLengError },
              }
        );
        return;
      }

      if (emailMaxLength) {
        setMemberShip((prevState) =>
          prevState.email.isError === true && prevState.email.errorText === errorsEnum.email.maxLengthError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.email.value, isError: true, errorText: errorsEnum.email.maxLengthError },
              }
        );
        return;
      }

      if (specialSymbolCheck) {
        setMemberShip((prevState) =>
          prevState.email.isError === true && prevState.email.errorText === errorsEnum.email.textSpecialSymbolError
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.email.value, isError: true, errorText: errorsEnum.email.textSpecialSymbolError },
              }
        );
        return;
      }

      if (!emailPatternCheck) {
        setMemberShip((prevState) => ({ ...prevState, [name]: { value, isError: true, errorText: errorsEnum.email.emailPatternError } }));
        return;
      }
    }
    // 비밀번호
    if (name === "password" || name === "confirmPassword") {
      if (String(value).length > 15) {
        setMemberShip((prevState) =>
          prevState[name].isError === true
            ? prevState
            : {
                ...prevState,
                [name]: { value: prevState.password.value, isError: true, errorText: errorsEnum.password.maxLengthError },
              }
        );
        return;
      }

      setMemberShip((prevState) => {
        const confirmPassword = prevState[`${name === "password" ? "confirmPassword" : "password"}`].value;

        if (confirmPassword !== value) {
          return { ...prevState, [name]: { value, isError: true, errorText: "비밀번호가 틀립니다." } };
        }
        // 비밀번호가 동일하면 에러창 없어짐
        if (confirmPassword === value) {
          const propertyName = name === "password" ? "confirmPassword" : "password";
          return {
            ...prevState,
            [name]: { value, isError: false, errorText: "" },
            [propertyName]: {
              ...prevState[propertyName],
              isError: false,
              errorText: "",
            },
          };
        }
      });

      return;
    }

    setMemberShip((prevState) => ({ ...prevState, [name]: { value, isError: false, errorText: "" } }));
  }, []);

  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <Title>회 원 가 입</Title>
          <MemberShipForm handleSubmit={handleSubmit} handleChange={handleChange} onReset={onReset} memberShip={memberShip} />
          {isBlocking.current && (
            <div>
              <button>뒤로</button>
              <button>취소</button>
            </div>
          )}
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

// 길이가 10 초과 제한 o
const isMaxLengthCheck = (value) => {
  const textMaxLength = 10;
  return String(value).length > textMaxLength ? true : false;
};
// 길이가 5 미만 검사 o
const isMinLengthCheck = (value) => {
  const textMinLength = 5;
  return String(value).length < textMinLength ? true : false;
};

// 첫번째 숫자
const isFirstTexCheck = (value) => {
  const regExp = /^[0-9]/gi;
  return String(value).length === 1 && regExp.test(value) ? true : false;
};

// 공백
const isWhiteSpaceCheck = (value) => {
  // 정규식에 걸린다면 안티패턴
  const regExp = /\s/gi;
  return regExp.test(value) ? true : false;
};

// 특수기호
const isSpecialSymbol = (value) => {
  const regExp = /[\\{\\}\\[\]\\/?.,;:|\\)*~`!^\-_+<>@\\#$%&\\\\=\\(\\'\\"]/gi;
  return regExp.test(value) ? true : false;
};

// 한글 제한
const isKoreaLengCheck = (value) => {
  const regExp = /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi;
  return regExp.test(value) ? true : false;
};

const isEmailMaxLength = (value) => {
  const textMaxLength = 25;
  return String(value).length > textMaxLength ? true : false;
};

const isEmailSpecialSymbol = (value) => {
  const regExp = /[\\{\\}\\[\]\\/?,;:|\\)*~`!^\-_+<>\\#$%&\\\\=\\(\\'\\"]/gi;
  return regExp.test(value) ? true : false;
};

const isEmailPatternCheck = (value) => {
  const regExp = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.(kr|com|net)/gi;
  return regExp.test(value);
};

const isEmpty = (value) => {
  return String(value).length === 0;
};

export default MemberShipContainer;
