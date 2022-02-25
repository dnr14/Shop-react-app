export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";

export const successAction = info => {
  return {
    type: GET_USER_INFO_SUCCESS,
    info,
  };
};

export const loadingAction = () => {
  return {
    type: GET_USER_INFO,
  };
};

export const errorAction = error => {
  return {
    type: GET_USER_INFO_ERROR,
    error,
  };
};
