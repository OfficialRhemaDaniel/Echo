import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.153:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
