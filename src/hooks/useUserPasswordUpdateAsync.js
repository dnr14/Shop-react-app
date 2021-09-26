import axiosInstance from "axios/api/http";
import { useCallback, useReducer } from "react";
import userPasswordUpdateReducer from 'reducers/userPasswordUpdateReducer'
import * as actions from 'actions/userPasswordUpdateAction';

const useUserPasswordUpdateAsync = () => {
  const [state, dispatch] = useReducer(userPasswordUpdateReducer, {
    loading: false,
    success: null,
    error: null
  }
  );

  const fetch = useCallback(async (data) => {
    dispatch(actions.getUserUpdateAction());

    try {
      await axiosInstance.put("/api/users", data);
      dispatch(actions.getUserUpdateSuccessAction());
    } catch (error) {
      dispatch(actions.getUserUpdateErrorAction(error));
    }
  }, []);

  return [state, fetch];
}

export default useUserPasswordUpdateAsync;