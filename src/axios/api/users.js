import http from 'axios/api/http';

export async function userDelete(id) {
  return http.delete(`/api/users/${id}`);
}