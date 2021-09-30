import http from './http';

export async function SearchId(data) {
  return http.get(`/api/auth/search/${data}`);
}
export async function SearchPassword(id, email) {
  return http.post(`/api/auth/search`, { id, email });
}

export async function PasswordUpdate(id, email, newPassword) {
  return http.put("/api/auth/search", { id, email, newPassword });
}
