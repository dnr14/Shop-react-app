import { useCallback, useState } from "react";
import { isKoreaLengCheck, isSpecialSymbol, isWhiteSpaceCheck } from "utils/Validation";

const initialState = {
  id: {
    value: "",
    vaildation: null,
  },
  password: {
    value: "",
    vaildation: null,
  },
};

export const useForm = () => {
  const [value, setter] = useState(initialState);
  const handler = useCallback(e => {
    const { name, value } = e.target;
    let result;

    switch (name) {
      case "id":
        result = vaildationId(value);
        if (!result.success) {
          return setter(prevState =>
            prevState.id.vaildation === null
              ? {
                  ...prevState,
                  [`${name}`]: {
                    ...prevState[`${name}`],
                    vaildation: result,
                  },
                }
              : prevState,
          );
        }
        break;
      case "password":
        result = vaildationPassword(value);
        if (!result.success) {
          return setter(prevState =>
            prevState.password.vaildation === null
              ? {
                  ...prevState,
                  [`${name}`]: {
                    ...prevState[`${name}`],
                    vaildation: result,
                  },
                }
              : prevState,
          );
        }

        break;
      default:
        throw new Error("not found attr name");
    }

    setter(prevState => ({
      ...prevState,
      [`${name}`]: {
        value,
        vaildation: null,
      },
    }));
  }, []);
  return [value, handler];
};

function vaildationId(id) {
  // 여러개의 에러 허용 x
  // 한개라도 걸린다면 바로 아웃
  // 아아디 15자 이상
  if (String(id).length === 20) {
    return {
      success: false,
      message: "15자 이하로 입력 가능합니다.",
    };
  }
  // 아이디 특수 문자
  if (isSpecialSymbol(id)) {
    return {
      success: false,
      message: "특수문자를 입력했습니다.",
    };
  }

  // 아이디 한글
  if (isKoreaLengCheck(id)) {
    return {
      success: false,
      message: "한글을 입력했습니다.",
    };
  }
  // 아이디 공백
  if (isWhiteSpaceCheck(id)) {
    return {
      success: false,
      message: "공백을 입력했습니다.",
    };
  }

  //결과
  return {
    success: true,
    message: null,
  };
}

const vaildationPassword = password => {
  //패스워드 길이

  if (String(password).length === 20) {
    return {
      success: false,
      message: "패스워드는 20자 이하로 입력 가능합니다.",
    };
  }
  //패스워드 공백
  if (isWhiteSpaceCheck(password)) {
    return {
      success: false,
      message: "공백을 입력했습니다.",
    };
  }
  //패스워드 한글
  if (isKoreaLengCheck(password)) {
    return {
      success: false,
      message: "한글을 입력했습니다.",
    };
  }

  return {
    success: true,
    message: null,
  };
};
