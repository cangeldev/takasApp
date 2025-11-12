import { api } from "./apiClient"

export const registerUser = async (email: string, password: string, username?: string, name?: string, surname?: string, phoneNumber?: string, city?: string, district?: string) => {
  const res = await api.post("/users/register", { email, password, username, name, surname, phoneNumber, city, district })
  return res.data
}

export const loginUser = async (email: string, password: string) => {
  const res = await api.post("/users/login", { email, password })
  return res.data
}
