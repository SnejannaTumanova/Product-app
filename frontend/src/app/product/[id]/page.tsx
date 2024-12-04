import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Product } from '@/types';

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady || !id) return;
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [router.isReady, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${product.photo}`}
        alt={product.name}
      />
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
