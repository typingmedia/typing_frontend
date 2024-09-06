import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://typingbackend.onrender.com",
    withCredentials: true,
  });