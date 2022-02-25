import http from "./http";

export const getFetchFindId = data => http.get(`/api/auth/search/${data}`);
export const getFetchFindPw = (id, email) => http.post(`/api/auth/search`, { id, email });
export const getFetchPwUpdate = (id, email, newPassword) => http.put("/api/auth/search", { id, email, newPassword });
export const getFetchSignup = (id, email, password) => http.post("/api/users", { id, email, password });
export const getFetchMyInfo = () => http.get("/api/users/me");
export const getFetchUserWithdrawal = id => http.delete(`/api/users/${id}`);
