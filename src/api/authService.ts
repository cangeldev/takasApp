import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from './apiClient'
import { AuthResponse, LoginPayload, RegisterUserPayload } from 'utils/types'

/**
 * Yeni kullanıcı kaydı ve ardından otomatik giriş
 */
export const registerUser = async (payload: RegisterUserPayload): Promise<AuthResponse> => {
  await api.post('/users/register', payload)
  return loginUser({ email: payload.email, password: payload.password })
}

/**
 * Kullanıcı girişi
 */
export const loginUser = async (payload: LoginPayload): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/users/login', payload)
  await AsyncStorage.setItem("userToken", data.token)
  return data
}

/**
 * Email kayıt kontrol
 */
export const checkEmail = async (email: string): Promise<{ exists: boolean; message: string }> => {
  const { data } = await api.post<{ exists: boolean; message: string }>('/users/check-email', { email })
  return data
}