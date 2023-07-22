import axiosInstance from "./axios.service";

const getUsers = async (query) => {
  const { data } = await axiosInstance.get('/api/users', {
    params: query
  })
  return data
}

export { getUsers }