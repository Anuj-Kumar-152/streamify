import axios from "axios";



const token = window.localStorage.getItem("token")


export const axiosInstance = axios.create({
   baseURL: "/api",
   withCredentials: true,
   headers: {
      Authorization:`Bearer ${token}`
   }
});