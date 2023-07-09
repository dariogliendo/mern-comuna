import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

export default instance