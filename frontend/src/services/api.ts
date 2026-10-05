import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function generateTrack(data: any) {
  const response = await api.post(
    "/generate",
    data,
    {
      responseType: "blob",
    }
  );
  
  return response.data;
}
export async function previewTrack(data: any) {
  const response = await api.post("/preview", data, {
    responseType: "blob",
  });

  return response.data;
}