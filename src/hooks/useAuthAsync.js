import { useCallback, useReducer } from "react";
import authReducer from "reducers/authReducer";
import { errorAction, loadingAction, successAction } from 'actions/authAction';
import axios from "axios";

const initialState = {
  loading: false,
  success: null,
  token: null,
  error: null,
};

const useAuthAsync = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const callLoginApi = useCallback(async (url, id, password) => {
    dispatch(loadingAction());
    try {
      const { data } = await axios.post(`${url}`, { id, password });
      if (data.success) {
        const { success, token } = data;
        dispatch(successAction(success, token));
      }
    } catch (error) {
      const { response } = error;
      dispatch(errorAction(response));
    }
  }, []);

  return [state, callLoginApi];
}
export default useAuthAsync;