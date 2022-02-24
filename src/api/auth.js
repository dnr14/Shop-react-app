import http from "./http";

export async function getFetchFindId(data) {
  return http.get(`/api/auth/search/${data}`);
}
export async function getFetchFindPw(id, email) {
  return http.post(`/api/auth/search`, { id, email });
}
export async function getFetchPwUpdate(id, email, newPassword) {
  return http.put("/api/auth/search", { id, email, newPassword });
}
export async function getFetchSignup(id, email, password) {
  return http.post("/api/users", { id, email, password });
}
export async function getFetchMyInfo() {
  return http.get("/api/users/me");
}

export async function getFetchUserWithdrawal(id) {
  return http.delete(`/api/users/${id}`);
}
