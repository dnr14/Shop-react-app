import { useCallback, useReducer } from "react";
import authReducer, { POST_LOGIN, POST_LOGIN_ERROR, POST_LOGIN_SUCCESS } from "authReducer";
import axios from "axios";

const initialState = {
  loading: false,
  success: null,
  error: null,
};

const useAuthAsync = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const callLoginApi = useCallback(async (url, { id, password }) => {
    dispatch({ type: POST_LOGIN });
    try {
      const { data } = await axios.post(`${url}`, { id, password });
      console.log(data);
      if (data.success) {
        dispatch({ type: POST_LOGIN_SUCCESS, success: data.success });
      }
    } catch (error) {
      const { response } = error;
      dispatch({ type: POST_LOGIN_ERROR, error: response.data });
    }
  }, []);

  return [state, callLoginApi];
}
export default useAuthAsync;