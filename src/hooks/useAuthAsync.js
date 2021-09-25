import { useCallback, useReducer } from "react";
import authReducer from "reducers/authReducer";
import { errorAction, loadingAction, successAction } from 'actions/authAction';
import axiosInstance from "axios/api/http";

const initialState = {
  loading: false,
  success: null,
  access_token: null,
  error: null,
};

const useAuthAsync = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const callLoginApi = useCallback(async (url, id, password) => {
    dispatch(loadingAction());
    try {
      const { data } = await axiosInstance.post(`${url}`, { id, password });
      if (data.success) {
        const { success, access_token } = data;
        dispatch(successAction(success, access_token));
      }
    } catch (error) {
      dispatch(errorAction(error));
    }
  }, []);

  return [state, callLoginApi];
}
export default useAuthAsync;