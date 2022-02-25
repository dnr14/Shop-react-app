export const MEMBERSHIP_ERRORS = Object.freeze({
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
    maxLengthError: "이메일은 최대 25자 입니다.",
  }),
  password: Object.freeze({
    maxLengthError: "비밀번호는 최대 15자 입니다.",
    minLengthError: "비밀번호는 최소 6자 입니다.",
    spaceError: "공백을 입력했습니다.",
  }),
});
