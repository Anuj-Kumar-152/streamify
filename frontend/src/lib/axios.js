import axios from "axios";



const token = window.localStorage.getItem("token")


export const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL ||"/api",
   withCredentials: true,
   headers: {
      Authorization:`Bearer ${token}`
   }
});