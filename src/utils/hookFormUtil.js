import { getNewlineCount } from "./TextUtil";

export const getTextAreaOption = () => ({
  validate: {
    newlineLimit: (value) =>
      getNewlineCount(value) > 15 ? "줄바꿈은 최대 15번 입니다." : true,
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
