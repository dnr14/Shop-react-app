import { POST_LOGIN, POST_LOGIN_ERROR, POST_LOGIN_SUCCESS } from "actions/authAction";

export default function authReducer(previouseState, action) {
  const { type } = action;

  switch (type) {
    case POST_LOGIN:
      return {
        loading: true,
        success: null,
        error: null,
        token: null
      };
    case POST_LOGIN_SUCCESS:
      return {
        loading: false,
        success: action.success,
        error: null,
        token: action.token
      };
    case POST_LOGIN_ERROR:
      return {
        loading: false,
        success: null,
        error: action.error,
        token: null
      };
    default:
      throw new Error("action is not found by authReducer")
  }

}