export const POST_LOGIN = "POST_LOGIN";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

export const successAction = (success, token) => {
  return {
    type: POST_LOGIN_SUCCESS,
    success,
    token,
  };
};

export const loadingAction = () => {
  return {
    type: POST_LOGIN,
  };
};

export const errorAction = error => {
  return {
    type: POST_LOGIN_ERROR,
    error,
  };
};
