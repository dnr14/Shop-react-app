import axios from "axios";
import { getAccessToken } from "utils/LocalStorageUtil";

const http = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  config => {
    config.headers.authorization = getAccessToken();
    return config;
  },
  err => {
    return Promise.reject({
      sucess: false,
      message: "요청 중 에러 발생",
    });
  },
);

http.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    const { response } = error;
    const { status, data } = response;

    let response_error = null;
    if (status) {
      if (status >= 500) response_error = new Error("서버 에러 잠시 후 다시 시작해주세요.");
      if (status >= 400) response_error = new Error(errorHandler(data));
    }
    return Promise.reject(response_error);
  },
);

const errorHandler = data => {
  const { message } = data;

  if (!message) return data.error;

  return message;
};

export default http;
