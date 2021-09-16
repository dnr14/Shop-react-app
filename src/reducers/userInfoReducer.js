import { GET_USER_INFO, GET_USER_INFO_ERROR, GET_USER_INFO_SUCCESS } from "actions/userInfoAction";

export default function userInfoReducer(previouseState, action) {
  const { type } = action;

  switch (type) {
    case GET_USER_INFO:
      return {
        ...previouseState,
        loading: true
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...previouseState,
        info: action.info,
        loading: false,
      }
    case GET_USER_INFO_ERROR:
      return {
        ...previouseState,
        error: true,
        loading: false,
        info: null
      }
    default:
      throw new Error("action is not found by userInfoReducer")
  }
}

