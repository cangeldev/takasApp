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
    const { data } = await api.post<AuthResponse>('/users/register', payload)
    return data
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
    return data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Giriş işlemi başarısız.')
  }
}
