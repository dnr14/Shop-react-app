import http from './http';

export async function getBorders() {
  return http.get("/api/borders/");
}

export async function createBorder(formData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return http.post("/api/borders/", formData, config);
}

