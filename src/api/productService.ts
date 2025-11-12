import { api } from "./apiClient";

export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const addProduct = async (token: string, title: string, description: string) => {
  const res = await api.post(
    "/products",
    { title, description },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
