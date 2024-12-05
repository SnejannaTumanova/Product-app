import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import styles from './ProductCatalog.module.css';
import { LuSearchCheck } from 'react-icons/lu';
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import fetchProducts from '@/api/fetchProducts';

export default function ProductCatalog() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [sendFilter, setSendFilter] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    page,
    sort,
    order,
    priceMin: minPrice,
    priceMax: maxPrice,
    name: nameFilter,
  });

  const handleSearch = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: 1,
      priceMin:
        prevFilters.priceMin === undefined ? undefined : prevFilters.priceMin,
      priceMax:
        prevFilters.priceMax === undefined ? undefined : prevFilters.priceMax,
      name: prevFilters.name,
    }));
    setSendFilter(!sendFilter);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', filters],
    queryFn: () =>
      fetchProducts({
        page: filters.page,
        limit: 10,
        sort: filters.sort,
        order: filters.order,
        priceMin: filters.priceMin,
        priceMax: filters.priceMax,
        name: filters.name,
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
    setFilters({
      page,
      sort,
      order,
      priceMin: minPrice,
      priceMax: maxPrice,
      name: nameFilter,
    });
  }, [sendFilter]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className={styles.catalog}>
      <div className={styles.filters}>
        <label>
          Minimum product price:
          <input
            type="number"
            value={minPrice !== undefined ? minPrice : ''}
            onChange={(e) =>
              setMinPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            placeholder="Min Price"
          />
        </label>
        <label>
          Maximum product price:
          <input
            type="number"
            value={maxPrice !== undefined ? maxPrice : ''}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
            }
            placeholder="Max Price"
          />
        </label>
        <label>
          Name of product:
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Search by name"
          />
        </label>
        <button onClick={handleSearch}>
          <LuSearchCheck />
          Search
        </button>
      </div>

      <div>
        <button className={styles.sort} onClick={toggleSortOrder}>
          Sort by Price ({order === 'ASC' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      <div className={styles.table}>
        <div className={styles.rowHead}>
          <span>Name</span>
          <span>Price</span>
          <span>SKU</span>
          <span>Photo</span>
        </div>
        <div className={styles.column}>
          {Array.isArray(data) &&
            data.map((product: Product) => (
              <div className={styles.row} key={product.id}>
                <span>{product.name}</span>
                <span>{product.price}$</span>
                <span>{product.sku}</span>
                <span className={styles.photo}>
                  {product.photo ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${product.photo}`}
                      alt={product.name}
                      style={{ maxWidth: '50px', height: 'auto' }}
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </span>
              </div>
            ))}
        </div>
      </div>

      <div>
        <button
          className={styles.pag}
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              page: Math.max(prev.page - 1, 1),
            }))
          }
          disabled={filters.page === 1}
        >
          <GrLinkPrevious />
        </button>
        <span>{filters.page}</span>
        <button
          className={styles.pag}
          onClick={() =>
            setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
          }
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
}
