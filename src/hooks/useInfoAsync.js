import { errorAction, loadingAction, successAction } from "actions/userInfoAction";
import axios from "axios";
import { useCallback, useReducer } from "react";
import userInfoReducer from "reducers/userInfoReducer";
import { getAccessToken } from "utils/LocalStorageUtil";

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
      const { data } = await axios.get("/api/users/info", {
        headers: {
          authorization: getAccessToken(),
        },
      })
      const { id, email } = data;
      dispatch(successAction({ id, email }));
    } catch (error) {
      const { response } = error;
      dispatch(errorAction(response));
    }
  }, []);


  return [state, getUserInfoAPI];
}

export default useInfoAsync;