export const USER_UPDATE = "USER_UPDATE";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_ERROR = "USER_UPDATE_ERROR";

export const passwordModify = () => ({ type: USER_UPDATE });
export const passwordModifySuccess = () => ({ type: USER_UPDATE_SUCCESS });
export const passwordModifyError = (error) => ({
  type: USER_UPDATE_ERROR,
  error,
});
