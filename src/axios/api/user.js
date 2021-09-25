import http from './http';

export async function PasswordUpdat(id, currentPassword, newPssword) {
  return http.put("/api/user/", { id, currentPassword, newPssword });
}