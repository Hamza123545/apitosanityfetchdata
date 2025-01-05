// lib/uploadToSanity.ts
import { client } from './client';
import { fetchFakeStoreData } from './fetchFakeStoreData';
import { Product } from '@/app/types/type';

const uploadToSanity = async () => {
  const products = await fetchFakeStoreData();
  products.forEach(async (product: Product) => {
    await client.create({
      _type: 'product',
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.image,
    });
  });
};

uploadToSanity();
