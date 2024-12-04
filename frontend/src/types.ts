export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  sku: string;
  photo: string | null;
}

export interface QueryParams {
  page: number;
  sort: string;
  order: 'ASC' | 'DESC';
}
