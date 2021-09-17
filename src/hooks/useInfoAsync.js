import { errorAction, loadingAction, successAction } from "actions/userInfoAction";
import { useCallback, useReducer } from "react";
import userInfoReducer from "reducers/userInfoReducer";
import axiosInstance from "axios/customAxios";

const initialState = {
  loading: false,
  info: null,
  error: null
}

const useInfoAsync = () => {
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  const getUserInfoAPI = useCallback(async () => {
    dispatch(loadingAction());
    try {
      const { data } = await axiosInstance.get("/api/users/info");
      const { userInfo } = data;
      console.log("userInfo", userInfo);
      dispatch(successAction(userInfo));
    } catch (error) {
      dispatch(errorAction(error));
    }
  }, []);


  return [state, getUserInfoAPI];
}

export default useInfoAsync;