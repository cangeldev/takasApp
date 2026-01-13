import axios, { AxiosError } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API_URL = 'http://192.168.1.40:4000'

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('userToken')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  response => response,
  (error: AxiosError<{ message?: string }>) => {
    const message = error.response?.data?.message || error.message || 'Beklenmeyen bir hata oluştu'
    return Promise.reject(new Error(message))
  }
)