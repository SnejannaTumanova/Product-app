import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/api/fetchProducts';
import { useEffect, useState } from 'react';
import { Product } from '@/types';

export default function ProductCatalog() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [nameFilter, setNameFilter] = useState('');

  const [filters, setFilters] = useState({
    page,
    sort,
    order,
    minPrice,
    maxPrice,
    nameFilter,
  });

  const handleSearch = () => {
    setFilters({
      page: 1,
      sort,
      order,
      minPrice,
      maxPrice,
      nameFilter,
    });
  };

  const { data, isLoading, error, refetch } = useQuery<Product[], Error>({
    queryKey: ['products', filters],
    queryFn: () =>
      fetchProducts({
        page: filters.page,
        sort: filters.sort,
        order: filters.order,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        nameFilter: filters.nameFilter,
      }),
    staleTime: 1000 * 60 * 5,
  });

  const toggleSortOrder = () => {
    const newOrder = order === 'ASC' ? 'DESC' : 'ASC';
    setOrder(newOrder);
    setFilters((prevFilters) => ({
      ...prevFilters,
      order: newOrder,
    }));
  };

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice === '' ? '' : minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value ? Number(e.target.value) : '')
            }
            placeholder="Min Price"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice === '' ? '' : maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : '')
            }
            placeholder="Max Price"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Search by name"
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <button onClick={toggleSortOrder}>
          Sort by Price ({order === 'ASC' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => setSort('name')}>Name</th>
            <th onClick={() => setSort('price')}>Price</th>
            <th>SKU</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product: Product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}$</td>
              <td>{product.sku}</td>
              <td>{product.photo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
}
