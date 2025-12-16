import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from './apiClient'

export interface RegisterUserPayload {
  email: string
  password: string
  username?: string
  name?: string
  surname?: string
  phoneNumber?: string
  city?: string
  district?: string
  selectedName: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    username?: string
    name?: string
    surname?: string
  }
}

/**
 * Yeni kullanıcı kaydı
 */
export const registerUser = async (payload: RegisterUserPayload): Promise<AuthResponse> => {
  try {
    await api.post<AuthResponse>('/users/register', payload)
    const loginData = await loginUser({ email: payload.email, password: payload.password })
    return loginData
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Kayıt işlemi başarısız.')
  }
}

/**
 *  Kullanıcı girişi
 */
export const loginUser = async (payload: LoginPayload): Promise<AuthResponse> => {
  try {
    const { data } = await api.post<AuthResponse>('/users/login', payload)
    await AsyncStorage.setItem("userToken", data.token)
    return data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Giriş işlemi başarısız.')
  }
}

/**
 *  Email kayıt kontrol
 */
export const checkEmail = async (email: string): Promise<{ exists: boolean; message: string }> => {
  try {
    const { data } = await api.post<{ exists: boolean; message: string }>('/users/check-email', { email })
    return data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Email kontrolü başarısız.')
  }
}
