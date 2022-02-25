import { errorAction, loadingAction, successAction } from "modules/actions/myInfoAction";
import { useCallback, useReducer } from "react";
import myInfoReducer from "modules/reducers/myInfoReducer";
import { getFetchMyInfo } from "api/auth";

const initialState = {
  loading: false,
  info: null,
  error: null,
};

const useMyInfo = () => {
  const [state, dispatch] = useReducer(myInfoReducer, initialState);

  const fetch = useCallback(async () => {
    dispatch(loadingAction());
    try {
      const { data } = await getFetchMyInfo();
      dispatch(successAction(data.userInfo));
    } catch (error) {
      dispatch(errorAction(error.message));
    }
  }, []);

  return [state, fetch];
};

export default useMyInfo;
