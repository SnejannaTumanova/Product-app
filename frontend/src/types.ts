export interface QueryParams {
  page: number;
  sort: string;
  order: 'ASC' | 'DESC';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sku: string;
  photo: string | null;
}

export interface FetchProductsParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'ASC' | 'DESC';
  priceMin?: number;
  priceMax?: number;
  name?: string;
}
