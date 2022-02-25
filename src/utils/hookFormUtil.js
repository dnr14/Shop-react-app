import { getNewlineCount } from "./TextUtil";
import { isKoreaLengCheck, isSpecialSymbol, isWhiteSpaceCheck } from "./Validation";

export const getTextAreaOption = () => ({
  validate: {
    newlineLimit: value => (getNewlineCount(value) > 15 ? "줄바꿈은 최대 15번 입니다." : true),
  },
  maxLength: {
    value: 300,
    message: "최대 300자 이하 입니다.",
  },
  minLength: {
    value: 4,
    message: "최소 4자 이상 입니다.",
  },
});

export const getPasswordOption = () => ({
  validate: {
    whiteSpaceCheck: value => (isWhiteSpaceCheck(value) ? "공백이 들어갔습니다." : true),
  },
  required: "비밀번호는 필수 입니다.",
  maxLength: {
    value: 10,
    message: "최대 10자 입니다.",
  },
  minLength: {
    value: 4,
    message: "최소 4자 이상입니다.",
  },
});

export const getIdOption = () => ({
  validate: {
    specialSymbol: value => (isSpecialSymbol(value) ? "특수문자가 들어갔습니다." : true),
    koreaLeng: value => (isKoreaLengCheck(value) ? "한글이 들어갔습니다." : true),
    whiteSpace: value => (isWhiteSpaceCheck(value) ? "공백이 들어갔습니다." : true),
  },
  minLength: {
    value: 4,
    mesaage: "최소 4자 이상입니다.",
  },
  maxLength: {
    value: 8,
    message: "최대 8자 입니다.",
  },
  required: "아이디는 필수 입니다.",
});

export const getFileOption = () => ({
  validate: {
    check: value => {
      if (value.length === 0) return true;
      const extension = String(value[0].name).split(".")[1];
      if (extension === "jpeg" || extension === "png" || extension === "gif") {
        return true;
      }
      return "jpeg png gif만 가능합니다.";
    },
  },
});
