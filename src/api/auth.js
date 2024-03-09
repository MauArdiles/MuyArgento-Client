import axios from "./axios.js";

export const signinRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");
