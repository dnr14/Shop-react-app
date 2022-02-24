import axiosInstance from "api/http";
import { useCallback, useReducer } from "react";
import passwordModifyReducer from "modules/reducers/passwordModifyReducer";
import {
  passwordModify,
  passwordModifyError,
  passwordModifySuccess,
} from "modules/actions/passwordModifyAction";

const usePasswordModify = () => {
  const [state, dispatch] = useReducer(passwordModifyReducer, {
    loading: false,
    success: null,
    error: null,
  });

  const fetch = useCallback(async (data) => {
    dispatch(passwordModify());

    try {
      await axiosInstance.put("/api/users", data);
      dispatch(passwordModifySuccess());
    } catch (error) {
      dispatch(passwordModifyError(error.message));
    }
  }, []);

  return [state, fetch];
};

export default usePasswordModify;
