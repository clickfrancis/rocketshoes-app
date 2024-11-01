import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchData = async () => {
  const response = await axios.get("/products");
  return response.data;
};
