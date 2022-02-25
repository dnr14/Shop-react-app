import { useCallback, useState } from "react";
import { MEMBERSHIP_ERRORS } from "utils/Enums";

const initialState = {
  id: { value: "", isError: false, errorText: "" },
  email: { value: "", isError: false, errorText: "" },
  password: { value: "", isError: false, errorText: "" },
  confirmPassword: { value: "", isError: false, errorText: "" },
};

const useSignupForm = (keep = true) => {
  const [_keep] = useState(keep);
  const [value, setter] = useState(initialState);

  const handleChange = useCallback(
    e => {
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
          setter(prevState =>
            prevState.id.isError === true && prevState.id.errorText === MEMBERSHIP_ERRORS.id.firstTextError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.id.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.id.firstTextError,
                  },
                },
          );
          return;
        }

        // 공백 입력
        if (spaceCheck) {
          setter(prevState =>
            prevState.id.isError === true && prevState.id.errorText === MEMBERSHIP_ERRORS.id.spaceError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.id.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.id.spaceError,
                  },
                },
          );
          return;
        }

        // 특수문자
        if (specialSymbolCheck) {
          setter(prevState =>
            prevState.id.isError === true && prevState.id.errorText === MEMBERSHIP_ERRORS.id.textSpecialSymbolError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.id.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.id.textSpecialSymbolError,
                  },
                },
          );
          return;
        }

        // 한글 입력
        if (koreaLengCheck) {
          setter(prevState =>
            prevState.id.isError === true && prevState.id.errorText === MEMBERSHIP_ERRORS.id.textKoreaLengError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.id.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.id.textKoreaLengError,
                  },
                },
          );
          return;
        }

        // value 최소길이 검사
        if (minLengthCheck) {
          setter(prevState => ({
            ...prevState,
            [name]: {
              value,
              isError: true,
              errorText: MEMBERSHIP_ERRORS.id.minLengthError,
            },
          }));
          return;
        }

        // value 최고길이 검사
        if (maxLengthCheck) {
          setter(prevState =>
            prevState.id.isError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.id.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.id.maxLengthError,
                  },
                },
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
          setter(prevState =>
            prevState.email.isError === true && prevState.email.errorText === MEMBERSHIP_ERRORS.email.firstTextError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.email.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.email.firstTextError,
                  },
                },
          );
          return;
        }

        if (spaceCheck) {
          setter(prevState =>
            prevState.email.isError === true && prevState.email.errorText === MEMBERSHIP_ERRORS.email.spaceError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.email.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.email.spaceError,
                  },
                },
          );
          return;
        }

        if (koreaLengCheck) {
          setter(prevState =>
            prevState.email.isError === true && prevState.email.errorText === MEMBERSHIP_ERRORS.email.textKoreaLengError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.email.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.email.textKoreaLengError,
                  },
                },
          );
          return;
        }

        if (emailMaxLength) {
          setter(prevState =>
            prevState.email.isError === true && prevState.email.errorText === MEMBERSHIP_ERRORS.email.maxLengthError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.email.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.email.maxLengthError,
                  },
                },
          );
          return;
        }

        if (specialSymbolCheck) {
          setter(prevState =>
            prevState.email.isError === true &&
            prevState.email.errorText === MEMBERSHIP_ERRORS.email.textSpecialSymbolError
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.email.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.email.textSpecialSymbolError,
                  },
                },
          );
          return;
        }

        if (!emailPatternCheck) {
          setter(prevState => ({
            ...prevState,
            [name]: {
              value,
              isError: true,
              errorText: MEMBERSHIP_ERRORS.email.emailPatternError,
            },
          }));
          return;
        }
      }
      // 비밀번호
      if (name === "password" || name === "confirmPassword") {
        if (String(value).length > 15) {
          setter(prevState =>
            prevState[name].isError === true
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    value: prevState.password.value,
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.password.maxLengthError,
                  },
                },
          );
          return;
        }
        const spaceCheck = isWhiteSpaceCheck(value);
        if (spaceCheck) {
          setter(prevState =>
            prevState[name].isError === true
              ? prevState
              : {
                  ...prevState,
                  [name]: {
                    ...prevState[`${name}`],
                    isError: true,
                    errorText: MEMBERSHIP_ERRORS.password.spaceError,
                  },
                },
          );
          return;
        }

        if (_keep) {
          setter(prevState => {
            const confirmPassword = prevState[`${name === "password" ? "confirmPassword" : "password"}`].value;

            if (confirmPassword !== value) {
              return {
                ...prevState,
                [name]: {
                  value,
                  isError: true,
                  errorText: "비밀번호가 틀립니다.",
                },
              };
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
      }

      setter(prevState => ({
        ...prevState,
        [name]: { value, isError: false, errorText: "" },
      }));
    },
    [_keep],
  );

  const onReset = useCallback(() => setter(initialState), []);

  return [value, onReset, handleChange];
};

// 길이가 10 초과 제한 o
const isMaxLengthCheck = value => {
  const textMaxLength = 10;
  return String(value).length > textMaxLength ? true : false;
};
// 길이가 5 미만 검사 o
const isMinLengthCheck = value => {
  const textMinLength = 5;
  return String(value).length < textMinLength ? true : false;
};

// 첫번째 숫자
const isFirstTexCheck = value => {
  const regExp = /^[0-9]/gi;
  return String(value).length === 1 && regExp.test(value) ? true : false;
};

// 공백
// type email은 공백을 입력해도 무시해준다.
const isWhiteSpaceCheck = value => {
  const regExp = /\s/gi;
  return regExp.test(value) ? true : false;
};

// 특수기호
const isSpecialSymbol = value => {
  const regExp = /[\\{\\}\\[\]\\/?.,;:|\\)*~`!^\-_+<>@\\#$%&\\\\=\\(\\'\\"]/gi;
  return regExp.test(value) ? true : false;
};

// 한글 제한
const isKoreaLengCheck = value => {
  const regExp = /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi;
  return regExp.test(value) ? true : false;
};

const isEmailMaxLength = value => {
  const textMaxLength = 25;
  return String(value).length > textMaxLength ? true : false;
};

const isEmailSpecialSymbol = value => {
  const regExp = /[\\{\\}\\[\]\\/?,;:|\\)*~`!^\-_+<>\\#$%&\\\\=\\(\\'\\"]/gi;
  return regExp.test(value) ? true : false;
};

const isEmailPatternCheck = value => {
  const regExp = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.(kr|com|net)$/gi;
  return regExp.test(value);
};

export default useSignupForm;
