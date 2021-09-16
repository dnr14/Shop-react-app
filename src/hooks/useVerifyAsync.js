import axios from 'axios';
import { useAuthContext } from 'contexts/AuthContextProvider';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { getAccessToken, setAccessTokenRemove } from 'utils/LocalStorageUtil';

const useVerifyAsync = () => {
  const { setAccess } = useAuthContext();
  const history = useHistory();

  const isVerifyToken = useCallback(async () => {

    try {
      await axios.get("/api/auth/verify", {
        headers: {
          authorization: getAccessToken(),
        },
      });
    } catch (error) {
      history.push("/");
      setAccessTokenRemove();
      setAccess(null);
    }

  }, [setAccess, history]);



  return { isVerifyToken };
};

export default useVerifyAsync;