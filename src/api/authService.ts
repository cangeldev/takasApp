import { api } from "./apiClient";

export const registerUser = async (email: string, password: string, name?: string) => {
  const res = await api.post("/users/register", { email, password, name });
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await api.post("/users/login", { email, password });
  return res.data; // { token, user }
};
