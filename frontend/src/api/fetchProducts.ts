import { FetchProductsParams, Product } from '@/types';

const fetchProducts = (filters: FetchProductsParams) => {
  const query = new URLSearchParams();
  const transformedFilters = {
    page: filters.page,
    limit: 10,
    sort: filters.sort,
    order: filters.order,
    priceMin: filters.priceMin,
    priceMax: filters.priceMax,
    name: filters.name,
  };

  Object.entries(transformedFilters).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const url = `http://localhost:3000/products?${query.toString()}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);
};

export default fetchProducts;
