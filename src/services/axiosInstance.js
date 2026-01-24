import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ तुझा backend base url
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
