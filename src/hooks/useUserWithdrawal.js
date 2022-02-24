import { getFetchUserWithdrawal } from "api/auth";
import {
  userWithdrawal,
  userWithdrawalError,
  userWithdrawalSuccess,
} from "modules/actions/withdrawalAction";
import withdrawalReducer from "modules/reducers/withdrawalReducer";
import { useCallback, useReducer } from "react";

const init = {
  loading: false,
  success: null,
  error: null,
};

const useUserWithdrawal = () => {
  const [state, dispatch] = useReducer(withdrawalReducer, init);

  const fetch = useCallback(async (id) => {
    dispatch(userWithdrawal());
    try {
      await getFetchUserWithdrawal(id);
      dispatch(userWithdrawalSuccess());
    } catch (error) {
      dispatch(userWithdrawalError(error.message));
    }
  }, []);

  return [state, fetch];
};

export default useUserWithdrawal;
