import http from "./http";

export const getBoards = () => http.get("/api/boards/");
export const getMoreBoards = id => http.get(`/api/boards/${id}`);
export const getBoardDelete = (id, password) => http.delete(`/api/boards/${id}`, { data: { password } });
export const getBoardUpdate = (id, body, password) => http.put(`/api/boards/${id}`, { body, password });
export const getAddBoard = formData =>
  http.post("/api/boards/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
