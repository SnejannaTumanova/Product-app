import { Product } from '@/types';

export const fetchProducts = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<Product[]> => {
  const { page, sort, order, minPrice, maxPrice, nameFilter } = queryKey[1];

  let url = `http://localhost:3000/products/filtered?page=${page}&sort=${sort}&order=${order}`;

  if (minPrice) {
    url += `&priceMin=${minPrice}`;
  }
  if (maxPrice) {
    url += `&priceMax=${maxPrice}`;
  }

  if (nameFilter) {
    url += `&name=${nameFilter}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data as Product[];
};
