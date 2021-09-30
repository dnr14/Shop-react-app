import { useCallback, useReducer } from "react";
import * as usersApi from 'axios/api/users';

const USER_DELETE = "USER_DELETE"
const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS"
const USER_DELETE_ERROR = "USER_DELETE_ERROR"

const getUserDeleteAction = () => ({ type: USER_DELETE });
const getUserDeleteASuccessction = () => ({ type: USER_DELETE_SUCCESS });
const getUserDeleteAErrortion = (error) => ({ type: USER_DELETE_ERROR, error });

const init = {
  loading: false,
  success: null,
  error: null
}

const reducerUtiles = {
  loading() {
    return {
      loading: true,
      success: null,
      error: null
    }
  },
  success() {
    return {
      loading: false,
      success: true,
      error: null
    }
  },
  error(error) {
    return {
      loading: false,
      success: false,
      error
    }
  }
}

const deleteReducer = (state, action) => {
  switch (action.type) {
    case USER_DELETE:
      return reducerUtiles.loading();
    case USER_DELETE_SUCCESS:
      return reducerUtiles.success();
    case USER_DELETE_ERROR:
      return reducerUtiles.error(action.error);
    default:
      throw new Error('delete reducer에 없는 액션입니다.')
  }
}

const useUserDelete = () => {

  const [state, dispatch] = useReducer(deleteReducer, init);

  const getUserDeleteApi = useCallback(async (id) => {
    dispatch(getUserDeleteAction());
    try {
      await usersApi.userDelete(id);
      dispatch(getUserDeleteASuccessction());
    } catch (error) {
      console.log("useDelete Error", error);
      dispatch(getUserDeleteAErrortion(error));
    }
  }, []);

  return [state, getUserDeleteApi]
}


export default useUserDelete;
