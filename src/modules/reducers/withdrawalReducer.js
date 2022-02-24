import {
  USER_DELETE,
  USER_DELETE_ERROR,
  USER_DELETE_SUCCESS,
} from "modules/actions/withdrawalAction";

const reducerUtiles = {
  loading() {
    return {
      loading: true,
      success: null,
      error: null,
    };
  },
  success() {
    return {
      loading: false,
      success: true,
      error: null,
    };
  },
  error(error) {
    return {
      loading: false,
      success: false,
      error,
    };
  },
};

export default function withdrawalReducer(_, action) {
  switch (action.type) {
    case USER_DELETE:
      return reducerUtiles.loading();
    case USER_DELETE_SUCCESS:
      return reducerUtiles.success();
    case USER_DELETE_ERROR:
      return reducerUtiles.error(action.error);
    default:
      throw new Error("withdrawal reducer에 없는 액션입니다.");
  }
}
