import axiosInstance from "./axios.service";

const url = '/api/room'

const get = async (query) => {
  const { data } = await axiosInstance.get(url, {
    params: query
  })
  return data
}

const save = async (query) => {
  try {
    const { data } = await axiosInstance.post(url, query)
    return data
  } catch (error) {
    alert(error?.response?.data?.msg || 'Ocurrió un error')
  }
}

const remove = async (roomId) => {
  try {
    const {data} = await axiosInstance.delete(url, {
      data: {_id: roomId}
    })
  } catch (error) {
    alert(error?.response?.data?.msg || 'Ocurrió un error')
  }
}

export default {save, get, remove}