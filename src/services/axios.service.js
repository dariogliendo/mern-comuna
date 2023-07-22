import axios from "axios";

const sessionData = JSON.parse(localStorage.getItem('session'))

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': sessionData?.token
  }
})

export default axiosInstance