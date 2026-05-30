import { api } from './apiClient'

export interface Product {
  id: string
  title: string
  description: string
}

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>('/products')
  return data
}

export const addProduct = async (
  title: string,
  description: string
): Promise<Product> => {
  const { data } = await api.post<Product>('/products', {
    title,
    description,
  })
  return data
}
