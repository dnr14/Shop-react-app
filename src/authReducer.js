export const POST_LOGIN = "POST_LOGIN";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

export default function authReducer(state, action) {
  const { type } = action;

  switch (type) {
    case POST_LOGIN:
      return {
        loading: true,
        success: null,
        error: null,
      };
    case POST_LOGIN_SUCCESS:
      return {
        loading: false,
        success: action.success,
        error: null,
      };
    case POST_LOGIN_ERROR:
      return {
        loading: false,
        success: null,
        error: action.error,
      };
    default:
      throw new Error("action is not found by authReducer")
  }

}