import { Product } from '@/types';

interface FetchProductsParams {
  page: number;
  sort: string;
  order: 'ASC' | 'DESC';
  minPrice?: number | '';
  maxPrice?: number | '';
  nameFilter?: string;
}

export const fetchProducts = async (
  params: FetchProductsParams
): Promise<Product[]> => {
  const { page, sort, order, minPrice, maxPrice, nameFilter } = params;

  let sortOrFilter = minPrice || maxPrice || nameFilter ? 'filtered' : 'sorted';

  let url = `http://localhost:3000/products/${sortOrFilter}?page=${page}&sort=${sort}&order=${order}`;

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
  console.log('data', data);
  console.log('data.price type', typeof data[0].price);
  return data as Product[];
};
