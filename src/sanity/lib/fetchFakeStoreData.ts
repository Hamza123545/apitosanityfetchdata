// lib/fetchFakeStoreData.ts
import axios from 'axios';
import { Product } from '@/app/types/type';

export const fetchFakeStoreData = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};
