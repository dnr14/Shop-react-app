import axios from 'axios';
import { getAccessToken } from 'utils/LocalStorageUtil';

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});


axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.authorization = getAccessToken();
    return config;
  },
  (err) => {
    return Promise.reject({
      sucess: false,
      message: "요청 중 에러 발생"
    });
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    const { response } = err;
    const { status } = response;
    if (status >= 500) {
      response.data = {
        sucess: false,
        error: "서버 에러 잠시 후 다시 시작해주세요.",
        token: null
      }
    }
    return Promise.reject(response);
  }
);

export default axiosInstance;