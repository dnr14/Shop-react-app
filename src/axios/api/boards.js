import http from './http';

export async function getBoards() {
  return http.get("/api/boards/");
}

export async function createBoard(formData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return http.post("/api/boards/", formData, config);
}

export async function getMore(boardsId) {
  return http.get(`/api/boards/${boardsId}`);
}

export async function deleteBoard(boardsId, password) {
  const data = { password }
  return http.delete(`/api/boards/${boardsId}`, { data });
}

export async function modifyBoard(boardsId, body, password) {
  const data = { password, body };
  return http.put(`/api/boards/${boardsId}`, data);
}