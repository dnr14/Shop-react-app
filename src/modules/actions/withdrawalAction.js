export const USER_DELETE = "USER_DELETE";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_ERROR = "USER_DELETE_ERROR";
export const userWithdrawal = () => ({ type: USER_DELETE });
export const userWithdrawalSuccess = () => ({ type: USER_DELETE_SUCCESS });
export const userWithdrawalError = error => ({
  type: USER_DELETE_ERROR,
  error,
});
