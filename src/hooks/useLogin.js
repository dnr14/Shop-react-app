import { useCallback, useReducer } from "react";
import authReducer from "modules/reducers/loginReducer";
import {
  errorAction,
  loadingAction,
  successAction,
} from "modules/actions/loginAction";
import http from "api/http";

const initialState = {
  loading: false,
  success: null,
  access_token: null,
  error: null,
};

const useLogin = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const fetch = useCallback(async (url, id, password) => {
    dispatch(loadingAction());
    try {
      const { data } = await http.post(`${url}`, { id, password });
      if (data.success) {
        const { success, access_token } = data;
        dispatch(successAction(success, access_token));
      }
    } catch (error) {
      dispatch(errorAction(error.message));
    }
  }, []);

  return [state, fetch];
};
export default useLogin;
