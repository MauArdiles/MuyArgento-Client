import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/admin",
  withCredentials: true,
});

export default instance;
