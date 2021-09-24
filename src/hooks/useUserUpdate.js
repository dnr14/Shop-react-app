import axiosInstance from "axios/customAxios";
import React, { useCallback, useReducer } from "react";


const init = {
  loading: false,
  success: null,
  error: null
}

const USER_UPDATE = "USER_UPDATE";
const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
const USER_UPDATE_ERROR = "USER_UPDATE_ERROR";

const getUserUpdateAction = () => ({ type: USER_UPDATE });
const getUserUpdateErrorAction = (error) => ({ type: USER_UPDATE_ERROR, error })
const getUserUpdateSuccessAction = () => ({ type: USER_UPDATE_SUCCESS });

const updateReducer = (state, action) => {

  switch (action.type) {
    case USER_UPDATE:
      return {
        loading: true,
        success: null,
        error: null
      }
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: null
      }
    case USER_UPDATE_ERROR:
      return {
        loading: false,
        success: null,
        error: action.error
      }
    default:
      break;
  }

}



const useUserUpdate = () => {
  const [state, dispatch] = useReducer(updateReducer, init);

  const getUserUpdateApi = useCallback(async (data) => {
    dispatch(getUserUpdateAction());

    try {
      await axiosInstance.put("/api/users", data);
      dispatch(getUserUpdateSuccessAction());
    } catch (error) {
      dispatch(getUserUpdateErrorAction(error));
    }
  }, []);

  return [state, getUserUpdateApi];
}

export default useUserUpdate;